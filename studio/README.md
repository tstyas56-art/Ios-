# استوديو — محرر فصول المانهوا

تطبيق احترافي لترجمة وتحرير فصول المانهوا والمانجا، مبني بـ React Native + Expo.

## المتطلبات

- Node.js 18+
- Expo CLI
- EAS CLI (اختياري للبناء السحابي)

## التثبيت

```bash
cd studio
npm install
npx expo prebuild
```

## التشغيل

### باستخدام EAS Build أو بناء محلي

```bash
eas build --profile development --platform ios
# أو
npx expo run:ios
```

### ملاحظة هامة

نسخة Studio الحالية تتجنب الاعتماد على وحدات Native اختيارية للرسم عند بدء التشغيل، حتى لا ينهار التطبيق إذا كان الـ IPA مبنياً أو موقّعاً بطريقة لا تضمّن تلك الوحدات بشكل صحيح.

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
