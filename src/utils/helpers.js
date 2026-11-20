/**
 * Utility helper functions for ANS GROUPS Car Rental
 */

export function formatIndianPhone(numStr) {
  const clean = String(numStr).replace(/\D/g, "");
  if (clean.length === 10) {
    return `+91 ${clean.slice(0, 5)} ${clean.slice(5)}`;
  }
  return numStr;
}

export function formatINR(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return "₹ 0";
  return `₹ ${Number(amount).toLocaleString('en-IN')}`;
}

export function calculateRentalDays(fromDate, toDate) {
  if (!fromDate || !toDate) return 0;
  const d1 = new Date(fromDate);
  const d2 = new Date(toDate);
  const diffTime = d2.getTime() - d1.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24)) + 1;
  return diffDays > 0 ? diffDays : 0;
}

export function getTodayDateString() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

export function buildWhatsAppUrl(phoneNumber, message) {
  const cleanNumber = String(phoneNumber).replace(/\D/g, "");
  const fullNumber = cleanNumber.startsWith("91") ? cleanNumber : `91${cleanNumber}`;
  const encodedText = encodeURIComponent(message || "Hello ANS GROUPS, I would like to inquire about car rentals.");
  return `https://wa.me/${fullNumber}?text=${encodedText}`;
}

export function generateReferenceCode(prefix = "ANS-CAR") {
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  return `${prefix}-${dateStr}-${randomStr}`;
}
