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
        "headline": "أرز بخاري و لحم مميز بطعم البيت الأصيل",
        "subHeadline": "نعدّ كل طلب بكميات محدودة وعالية الجودة للمناسبات العائلية والتجمعات الصغيرة.",
        "ctaBook": "احجز مناسبتك",
        "ctaMenu": "شاهد القائمة والأسعار",
        "trust1": "توصيل مجاني",
        "trust2": "مرافق إضافية مشمولة",
        "trust3": "حد أقصى 2 خروف / طلب",
        "imageLabel": "[خلفية البطل - كازان]"
    },
    "about": {
        "eyebrow": "قصة كازان أم أحمد",
        "heading": "إرث، جودة، ودفء المنزل",
        "paragraph1": "كل طبق يخرج من مطبخنا يحمل أجيالاً من التقاليد. نؤمن بأن الطيب لا يُستعجل، لذلك نحضّر كل طلب بكميات محدودة وعناية فائقة.",
        "paragraph2": "نختار أفضل سلالات الغنم المحلية والمستوردة، منتقين كل قطعة من حيث الطراوة والنكهة والرائحة التي لا تتحقق إلا بالطهي البطيء على طريقة البيت.",
        "paragraph3": "من العشاء العائلي الصغير إلى الاحتفالات المتواضعة، مطبخنا المنزلي يقوم على الثقة والكرم ووعد بطعام يشعرك بأنه مُعدّ للعائلة — لأنه فعلاً كذلك.",
        "imageLabel": "[صورة تحضير في المطبخ المنزلي]"
    },
    "pricing": {
        "eyebrow": "القائمة والأسعار",
        "heading": "باقاتنا وأسعارنا",
        "oneLambTitle": "باقات الخروف الواحد",
        "twoLambTitle": "باقات الخروفين",
        "feedsUpTo": "يكفي حتى {{count}} شخص",
        "was": "كان {{price}} ريال",
        "now": "{{price}} ريال",
        "perOrder": "للطلب",
        "discountNote": "وفر {{amount}} ريال",
        "twoLambDiscountNote": "خصم إضافي 100 ريال",
        "inclusionsTitle": "جميع الطلبات تشمل",
        "inclusionsText": "جميع الطلبات تشمل توصيل مجاني ومرافقنا المميزة: لبن طازج، شتني (سلطة حارة مطحونة)، والسلطة الخضراء العادية.",
        "packages": {
            "suakniSpring": {
                "name": "صوكني ربيعي / لباني",
                "description": "خروف ربيعي طري، متبل بلطف و مطهو ببطء بنكهة خفيفة تناسب الجميع."
            },
            "whiteSuakni": {
                "name": "صوكني أبيض",
                "description": "خروف راقٍ بنكهة لطيفة وملمس كريمي عطري — مثالي للمناسبات الأنيقة."
            },
            "hari": {
                "name": "حري",
                "description": "خروف غني بالتوابل العميقة والنكهات التقليدية القوية، للذين يحبون الطعم الأصيل."
            }
        }
    },
    "howItWorks": {
        "eyebrow": "حجز بسيط",
        "heading": "كيفية الطلب",
        "step1": {
            "title": "اختر الخروف والتاريخ",
            "description": "اختر باقتك وتاريخ المناسبة. تذكر: حد أقصى خروفين أو 60 حصة للطلب الواحد."
        },
        "step2": {
            "title": "أرسل الطلب",
            "description": "املأ نموذج الحجز أدناه وسنستلم تفاصيلك فوراً."
        },
        "step3": {
            "title": "الدفع المقدم والتأكيد",
            "description": "احجز تاريخ مناسبتك بعربون يُرتّب بسرعة وأمان عبر الواتساب."
        },
        "step4": {
            "title": "توصيل طازج لباب منزلك",
            "description": "يصل طلبك ساخناً مع جميع المرافق المشمولة، جاهزاً لإبهار ضيوفك."
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
        "subtext": "املأ بياناتك وسنجهّز رسالة حجز مخصصة عبر الواتساب. لا يوجد خادم خلفي — طلبك يصل إلينا مباشرة.",
        "fields": {
            "name": "الاسم الكامل",
            "phone": "رقم الجوال / الواتساب",
            "address": "عنوان التوصيل / الحي",
            "dateTime": "تاريخ ووقت المناسبة",
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
        "whatsappMessage": "مرحباً كازان أم أحمد، أرغب بحجز طلب كاترينج:\n\nالاسم: {{name}}\nالجوال: {{phone}}\nالعنوان: {{address}}\nتاريخ/وقت المناسبة: {{dateTime}}\nالباقة: {{package}}\nالضيوف: {{guests}}\nالإجمالي: {{total}} ريال\n\nملاحظات:\n{{notes}}"
    },
    "footer": {
        "tagline": "أرز بخاري ولحم مميز من مطبق منزلي فاخر، محضّر بإرث وقلب.",
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
"[project]/src/dictionaries/en.json.[json].js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

throw new Error("Unable to make a module from invalid JSON: control character (\\u0000-\\u001F) found while parsing a string at line 41 column 48");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$en$2e$json$2e5b$json$5d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries/en.json.[json].js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries/ar.json.[json].cjs [app-ssr] (ecmascript)");
;
;
const locales = [
    "en",
    "ar"
];
const defaultLocale = "en";
const dictionaries = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$en$2e$json$2e5b$json$5d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
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

//# sourceMappingURL=%5Broot-of-the-server%5D__06lya-v._.js.map