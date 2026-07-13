<?php
// Kontaktformular-Handler für Hostinger (PHP mail())
// Wird von der React-App via fetch('/kontakt.php') aufgerufen.

header('Content-Type: application/json; charset=utf-8');

// Nur POST erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// JSON-Body lesen
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;

// Honeypot – wenn ausgefüllt → Bot → still verwerfen
if (!empty($data['website'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$phone   = trim((string)($data['phone']   ?? ''));
$service = trim((string)($data['service'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

// Pflichtfelder
if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Bitte Name, gültige E-Mail und Nachricht angeben.']);
  exit;
}

// Empfänger
$to      = 'office@vollmer-objektmoebel.com';
$subject = '=?UTF-8?B?' . base64_encode('Anfrage: ' . ($service ?: 'Kontakt') . ' – ' . $name) . '?=';

$body  = "Neue Anfrage über vollmer-objektmoebel.com\n\n";
$body .= "Name:     $name\n";
$body .= "E-Mail:   $email\n";
$body .= "Telefon:  $phone\n";
$body .= "Leistung: $service\n\n";
$body .= "Nachricht:\n$message\n";

// Absender: Domain-Postfach (Hostinger blockiert sonst fremde From-Adressen).
// Antworten gehen per Reply-To an den Absender.
$fromAddress = 'no-reply@vollmer-objektmoebel.com';
$headers  = "From: Vollmer Website <$fromAddress>\r\n";
$headers .= 'Reply-To: ' . str_replace(["\r","\n"], '', $email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$ok = @mail($to, $subject, $body, $headers, "-f$fromAddress");

if (!$ok) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Versand fehlgeschlagen. Bitte rufen Sie uns an.']);
  exit;
}

echo json_encode(['ok' => true]);
