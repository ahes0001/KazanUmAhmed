module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/language-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "kazan-um-ahmed-locale";
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getInitialLocale() {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
    const browserLang = undefined;
}
function LanguageProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"]);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Read persisted locale after hydration to avoid SSR/localStorage mismatch.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(getInitialLocale());
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
        window.localStorage.setItem(STORAGE_KEY, locale);
    }, [
        locale,
        mounted
    ]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        setLocaleState(next);
    }, []);
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setLocaleState((prev)=>prev === "en" ? "ar" : "en");
    }, []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDictionary"])(locale);
    const dir = locale === "ar" ? "rtl" : "ltr";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            locale,
            setLocale,
            toggleLocale,
            dir,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/language-provider.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
}),
"[project]/src/dictionaries/ar.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "businessName": "كازان أم أحمد",
    "nav": {
        "home": "الرئيسية",
        "about": "قصتنا",
        "pricing": "القائمة والأسعار",
        "howItWorks": "طريقة الطلب",
        "gallery": "معرض الصور",
        "book": "احجز الآن"
    },
    "hero": {
        "eyebrow": "تمويل منزلي فاخر",
        "headline": "متخصصين في بخاري لحم",
        "subHeadline": "نستقبل طلبات بكميات محدودة وعالية الجودة للمناسبات والتجمعات",
        "ctaBook": "احجز مناسبتك",
        "ctaMenu": "شاهد القائمة والأسعار",
        "trust1": "توصيل مجاني",
        "trust2": "مرافق إضافية مشمولة",
        "imageLabel": "[خلفية البطل - كازان]"
    },
    "about": {
        "eyebrow": "قصة كازان أم أحمد",
        "heading": "بداية قصتي مع البخاري من الغربة",
        "paragraph1": "خلال سنوات ابتعاثي، كان الطبخ بالنسبة لي أكثر من مجرد إعداد وجبة؛ كان شغفًا يجمعني بالأصدقاء والعائلات حول مائدة واحدة. بدأت بتجربة إعداد البخاري للتجمعات، وجرّبت وصفات وطرقًا عديدة، واستمعت إلى آراء واقتراحات من حولي، حتى وصلت مع الوقت إلى خلطتي الخاصة ونكهتي التي تميزني.",
        "paragraph2": "ومع كل طبق كنت أعدّه، كان الشغف يكبر… إلى أن قررت أن أحوّل هذا الحب إلى مشروع، وأن أحمل تجربتي معي إلى جدة.",
        "paragraph3": "اليوم، كل طبق يخرج من مطبخي يحمل عبق التقاليد، وخلاصة سنوات من التجربة والشغف. ولهذا اخترت أن أُحضّر الطلبات بكميات محدودة، لأمنح كل طلب ما يستحقه من عناية، وأحافظ على مستوى عالٍ من الجودة والطعم.",
        "paragraph4": "كما أحرص على اختيار أجود سلالات اللحوم المحلية والمستوردة بعناية، لضمان الطراوة، والجودة، والنكهة الأصيلة في كل طبق.",
        "paragraph5": "كما أحرص على اختيار أجود سلالات اللحوم المحلية والمستوردة بعناية، لضمان الطراوة، والجودة، والنكهة الأصيلة في كل طبق.",
        "imageLabel": "[صورة تحضير في المطبخ المنزلي]"
    },
    "pricing": {
        "eyebrow": "القائمة والأسعار",
        "heading": "باقاتنا وأسعارنا",
        "subheading": "التوصيل والسلطات مشمولة: لبن طازج، سلطة حارة، وسلطة خضراء.",
        "oneLambTitle": "باقات الخروف الواحد",
        "twoLambTitle": "باقات الخروفين",
        "feedsUpTo": "يكفي حتى {{count}} شخص",
        "was": "كان {{price}} ريال",
        "now": "{{price}} ريال",
        "perOrder": "للطلب",
        "discountNote": "خصم {{amount}} ريال",
        "twoLambDiscountNote": "خصم 900 ريال",
        "packages": {
            "suakniSpring": {
                "name": "سواكني",
                "description": ""
            },
            "whiteSuakni": {
                "name": "سواكني أبيض",
                "description": ""
            },
            "hari": {
                "name": "حري",
                "description": ""
            }
        }
    },
    "howItWorks": {
        "eyebrow": "الحجوزات",
        "heading": "كيفية الطلب",
        "step1": {
            "title": "اختر الخروف والتاريخ",
            "description": "اختر باقتك وتاريخ المناسبة."
        },
        "step2": {
            "title": "أرسل الطلب",
            "description": "اتصل علينا او ارسل واتساب او املأ نموذج الحجز أدناه وسنستلم تفاصيلك فوراً"
        },
        "step3": {
            "title": "العربون للتاكيد",
            "description": "ادفع للتاكيد واتمام الطلب "
        },
        "step4": {
            "title": "توصيل طازج لباب منزلك",
            "description": "يصل طلبك ساخناً مع السلطات. ويُستكمل المبلغ المتبقي عند الاستلام."
        }
    },
    "gallery": {
        "eyebrow": "لمحة من التجربة",
        "heading": "معرض الصور",
        "imageLabels": {
            "one": "[تقديم الطعام 1]",
            "two": "[طاولة تقديم دافئة]",
            "three": "[صورة مقربة للطبق الرئيسي]",
            "four": "[مائدة عائلية]",
            "five": "[تشكيلة المرافق]",
            "six": "[صينية جاهزة للتوصيل]"
        }
    },
    "booking": {
        "eyebrow": "احجز موعدك",
        "heading": "احجز مناسبتك",
        "subtext": "املأ بياناتك وسنجهّز رسالة حجز مخصصة عبر الواتساب.",
        "fields": {
            "name": "الاسم الكامل",
            "address": "عنوان التوصيل / الحي",
            "date": "تاريخ المناسبة",
            "time": "وقت المناسبة",
            "package": "اختر الباقة",
            "notes": "ملاحظات خاصة للتوصيل أو التحضير"
        },
        "packagePlaceholder": "اختر باقة",
        "orderPreview": {
            "title": "ملخص الطلب",
            "selectedPackage": "الباقة المختارة",
            "guests": "الضيوف",
            "originalPrice": "السعر الأصلي",
            "discount": "الخصم",
            "total": "الإجمالي",
            "freeDelivery": "التوصيل مجاني"
        },
        "submit": "إرسال الحجز عبر الواتساب",
        "whatsappMessage": "مرحباً كازان أم أحمد، أرغب بحجز طلب كاترينج:\n\nالاسم: {{name}}\nالعنوان: {{address}}\nتاريخ المناسبة: {{date}}\nوقت المناسبة: {{time}}\nالباقة: {{package}}\nالضيوف: {{guests}}\nالإجمالي: {{total}} ريال\n\nملاحظات:\n{{notes}}"
    },
    "footer": {
        "followUs": "تابعونا",
        "quickLinks": "روابط سريعة",
        "social": {
            "tiktok": "تيك توك",
            "instagram": "إنستغرام",
            "facebook": "فيسبوك",
            "youtube": "يوتيوب",
            "x": "إكس"
        },
        "links": {
            "home": "الرئيسية",
            "about": "قصتنا",
            "pricing": "الأسعار",
            "book": "احجز الآن"
        },
        "contact": {
            "title": "تواصل معنا",
            "phone": "+966 50 234 6713",
            "email": "kazanumahmed@gmail.com",
            "location": "حي الجامعة، جدة، المملكة العربية السعودية"
        },
        "hours": {
            "title": "أوقات العمل",
            "weekdays": "الأحد – الخميس: 10:00 ص – 11:00 م",
            "weekend": "الجمعة – السبت: 10:00 ظ – 11:00 م"
        },
        "copyright": "© {{year}} كازان أم أحمد. جميع الحقوق محفوظة."
    },
    "whatsappFab": {
        "label": "تواصل عبر الواتساب"
    }
};
}),
"[project]/src/dictionaries/en.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "businessName": "Kazan Um Ahmed",
    "nav": {
        "home": "Home",
        "about": "Our Story",
        "pricing": "Menu & Pricing",
        "howItWorks": "How It Works",
        "gallery": "Gallery",
        "book": "Book Now"
    },
    "hero": {
        "eyebrow": "Premium Home Kitchen Catering",
        "headline": "Specialty Lamb Bukhari",
        "subHeadline": "Authenticly prepared with fresh quality ingredients.",
        "ctaBook": "Book Your Event",
        "ctaMenu": "View Menu & Pricing",
        "trust1": "Free Delivery Included",
        "trust2": "Sides Included",
        "imageLabel": "[HERO KAZAN BACKGROUND]"
    },
    "about": {
        "eyebrow": "The Kazan Um Ahmed Story",
        "heading": "My Bukhari story began far from home",
        "paragraph1": "During my years studying abroad, cooking became much more than simply preparing a meal. It became a passion, a way of bringing friends and families together around one table.",
        "paragraph2": "I began preparing Bukhari rice for gatherings, experimenting with different recipes and techniques, and listening to the feedback and suggestions of those who tasted my food. Over time, after countless trials and refinements, I created my own signature blend and distinctive flavor.",
        "paragraph3": "With every dish I prepared, my passion grew stronger… until I decided to turn that passion into something more and bring my culinary journey home to Jeddah.",
        "paragraph4": "Today, every dish that leaves my kitchen carries the aroma of tradition, years of experience, and a genuine love for what I do. That is why I choose to prepare my orders in limited quantities, allowing me to give each one the attention it deserves while maintaining exceptional quality and flavor.",
        "paragraph5": "I also carefully select premium local and imported cuts of meat, chosen for their quality, tenderness, and ability to deliver the rich, authentic flavor that defines every dish.",
        "imageLabel": "[HOME KITCHEN PREP PHOTO]"
    },
    "pricing": {
        "eyebrow": "Menu & Pricing",
        "heading": "Our Packages & Pricing",
        "subheading": "Included delivery and sides: Fresh Yogurt, Spicy Salad, and Green Salad.",
        "oneLambTitle": "One Lamb Options",
        "twoLambTitle": "Two Lamb Options",
        "feedsUpTo": "Feeds {{count}} people",
        "was": "Was SAR {{price}}",
        "now": "SAR {{price}}",
        "perOrder": "per order",
        "discountNote": "SAR {{amount}} Off",
        "twoLambDiscountNote": "SAR 900 Off",
        "packages": {
            "suakniSpring": {
                "name": "Sawakni",
                "description": ""
            },
            "whiteSuakni": {
                "name": "White Sawakni",
                "description": ""
            },
            "hari": {
                "name": "Hari",
                "description": ""
            }
        }
    },
    "howItWorks": {
        "eyebrow": "Simple Booking",
        "heading": "How It Works",
        "step1": {
            "title": "Select Your Lamb & Date",
            "description": "Choose your package and event date. Remember: max 2 lambs or 60 servings per order."
        },
        "step2": {
            "title": "Submit Request",
            "description": "Call Us, WhatsApp messeage or fill out the booking form below to submit your request."
        },
        "step3": {
            "title": "Down Payment & Confirmation",
            "description": "Lock in your event date with a deposit arranged quickly and securely via WhatsApp."
        },
        "step4": {
            "title": "Fresh Delivery to Your Door",
            "description": "Your order arrives piping hot with all included sides, ready to impress your guests."
        }
    },
    "gallery": {
        "eyebrow": "A Taste of the Experience",
        "heading": "Photo Gallery",
        "imageLabels": {
            "one": "[FOOD PRESENTATION 1]",
            "two": "[CHAFING DISH SETUP]",
            "three": "[LAMB PLATTER CLOSE-UP]",
            "four": "[FAMILY GATHERING TABLE]",
            "five": "[SIDE DISHES SPREAD]",
            "six": "[PACKED DELIVERY TRAY]"
        }
    },
    "booking": {
        "eyebrow": "Reserve Your Date",
        "heading": "Book Your Gathering",
        "subtext": "Fill in your details and we will prepare your personalized WhatsApp booking message.",
        "fields": {
            "name": "Full Name",
            "address": "Delivery Address / Neighborhood",
            "date": "Event Date",
            "time": "Event Time",
            "package": "Select Your Package",
            "notes": "Special Delivery / Prep Notes"
        },
        "packagePlaceholder": "Choose a package",
        "orderPreview": {
            "title": "Order Preview",
            "selectedPackage": "Selected package",
            "guests": "Guests",
            "originalPrice": "Original price",
            "discount": "Discount",
            "total": "Total to pay",
            "freeDelivery": "Free delivery included"
        },
        "submit": "Send Booking via WhatsApp",
        "whatsappMessage": "Hello Kazan Um Ahmed, I would like to book a catering order:\n\nName: {{name}}\nAddress: {{address}}\nEvent Date: {{date}}\nEvent Time: {{time}}\nPackage: {{package}}\nGuests: {{guests}}\nTotal Price: SAR {{total}}\n\nSpecial Notes:\n{{notes}}"
    },
    "footer": {
        "followUs": "Follow Us",
        "quickLinks": "Quick Links",
        "social": {
            "tiktok": "TikTok",
            "instagram": "Instagram",
            "facebook": "Facebook",
            "youtube": "YouTube",
            "x": "X"
        },
        "links": {
            "home": "Home",
            "about": "Our Story",
            "pricing": "Pricing",
            "book": "Book Now"
        },
        "contact": {
            "title": "Contact",
            "phone": "+966 50 246 6713",
            "email": "kazanumahmed@gmail.com",
            "location": "Al Jameah, Jeddah, Saudi Arabia"
        },
        "hours": {
            "title": "Working Hours",
            "weekdays": "Sun – Thu: 10:00 AM – 11:00 PM",
            "weekend": "Fri – Sat: 10:00 AM – 11:00 PM"
        },
        "copyright": "© {{year}} Kazan Um Ahmed. All rights reserved."
    },
    "whatsappFab": {
        "label": "Chat on WhatsApp"
    }
};
}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "dictionaries",
    ()=>dictionaries,
    "getDictionary",
    ()=>getDictionary,
    "isLocale",
    ()=>isLocale,
    "locales",
    ()=>locales,
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries/en.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries/ar.json.[json].cjs [app-ssr] (ecmascript)");
;
;
const locales = [
    "en",
    "ar"
];
const defaultLocale = "en";
const dictionaries = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
function getDictionary(locale) {
    return dictionaries[locale] ?? dictionaries[defaultLocale];
}
function isLocale(value) {
    return locales.includes(value);
}
function t(template, data = {}) {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key)=>String(data[key] ?? `{{${key}}}`));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0wm5bbe._.js.map