# استوديو — محرر فصول المانهوا

تطبيق احترافي لترجمة وتحرير فصول المانهوا والمانجا، مبني بـ React Native + Expo ومهيأ للعمل داخل Expo Go بدون Skia أو Reanimated أو Gesture Handler.

## المتطلبات

- Node.js 18+
- Expo CLI
- EAS CLI (اختياري للبناء السحابي)

## التثبيت

```bash
cd studio
npm install
npx expo start
```

## التشغيل

### باستخدام Expo Go

```bash
npx expo start
# ثم افتح QR داخل Expo Go
```

### ملاحظة هامة

نسخة Studio الحالية تتجنب Skia وReanimated وGesture Handler حتى تعمل داخل Expo Go وتقلل مشاكل البناء الأصلي للـ iOS.

## الهيكل

```
studio/
├── app/                    # Expo Router (File-based routing)
│   ├── _layout.js          # Root layout
│   ├── index.js            # Home screen
│   ├── create.js           # Create chapter
│   ├── settings.js         # Settings
│   ├── chapter/[id].js     # Chapter pages grid
│   └── editor/[id].js      # Image editor
├── src/
│   ├── screens/            # Screen components
│   ├── components/         # Shared components (Icons, Alerts)
│   └── services/           # Database, Storage, Export, Parser
├── assets/                 # Icons & splash
└── package.json
```

## المميزات

- واجهة عربية كاملة مع دعم RTL
- استيراد صفحات متعددة (JPG, PNG, WEBP)
- استيراد ترجمة من ملف TXT أو لصق نص
- محرر Canvas مع أدوات نص وطبقات
- وضع الترجمة السريع (Placement Mode)
- وضع التركيز (Focus Mode)
- تصدير الصفحات بجودة عالية
- قاعدة بيانات SQLite محلية
- تصميم داكن احترافي

## الترخيص

ملكية خاصة — صُنع بعناية لفِرق الترجمة.
