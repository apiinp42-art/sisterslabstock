// ตั้งค่าการเชื่อมต่อ API
// - รันในเครื่อง (node server.js) หรือ Vercel: ปล่อย apiBase เป็น '' (ใช้เซิร์ฟเวอร์เดียวกับหน้าเว็บ)
// - GitHub Pages + Supabase: ใส่ URL ของ Edge Function เช่น
//     apiBase: 'https://abcdefghijkl.supabase.co/functions/v1/api'
window.STOCK_CONFIG = {
  apiBase: 'https://orrwhdtqxejwxzwulbvj.supabase.co/functions/v1/api',
};
