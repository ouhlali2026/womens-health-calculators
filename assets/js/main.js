/* ========================================
   صحة المرأة - الملف الموحد للجافاسكريبت (main.js)
   الإصدار: 1.0 | آخر تحديث: أبريل 2025
   ======================================== */

// انتظار تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. إضافة سنة حقوق الطبع والتأليف تلقائيًا (اختياري)
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // 2. تنبيه للمستخدمين عند النقر على روابط خارجية (اختياري، يحسن تجربة المستخدم)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('سيتم فتح رابط خارجي: ' + this.href);
        });
    });
    
    // 3. تنسيق أرقام الهاتف أو أي حقول رقمية (مثال: منع إدخال أحرف)
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (isNaN(e.key) && e.key !== '.') {
                e.preventDefault();
            }
        });
    });
    
    // 4. رسالة ترحيب أو إشعار بملفات تعريف الارتباط (يمكن تفعيلها لاحقًا)
    // تم تعطيلها حاليًا لأن الموقع لا يستخدم الكوكيز بشكل مباشر
    
    // 5. تحسين أداء الحاسبات: منع إرسال النماذج إذا كان هناك زر من نوع submit
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
    
    // 6. إضافة خاصية "التمرير السلس" للروابط الداخلية (اختياري)
    const internalHashLinks = document.querySelectorAll('a[href^="#"]');
    internalHashLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    console.log('تم تحميل موقع صحة المرأة بنجاح');
});
