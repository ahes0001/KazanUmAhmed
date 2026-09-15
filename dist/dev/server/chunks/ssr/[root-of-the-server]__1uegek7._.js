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
"[project]/src/dictionaries/ar.json.[json].js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

throw new Error("Unable to make a module from invalid JSON: expected value at line 68 column 22");
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
        "trust3": "Max 2 Lambs / Order",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$ar$2e$json$2e5b$json$5d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/dictionaries/ar.json.[json].js [app-ssr] (ecmascript)");
;
;
const locales = [
    "en",
    "ar"
];
const defaultLocale = "en";
const dictionaries = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$dictionaries$2f$ar$2e$json$2e5b$json$5d2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1uegek7._.js.map