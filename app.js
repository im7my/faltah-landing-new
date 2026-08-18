const {
  useState,
  useEffect
} = React;
const Icons = {
  LinkedIn: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  })),
  ArrowLeft: /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 19 5 12 12 5"
  })),
  Menu: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })),
  X: /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  Globe: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  })),
  ChevronDown: /*#__PURE__*/React.createElement("svg", {
    className: "faq-icon",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))
};
const BrandLogo = ({
  onClick
}) => /*#__PURE__*/React.createElement("div", {
  onClick: onClick,
  className: "flex items-center gap-2 z-50 group cursor-pointer",
  dir: "ltr"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col text-right"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-xl font-black text-white tracking-tight leading-none mb-1"
}, "\u0641\u0644\u062A\u0647"), /*#__PURE__*/React.createElement("span", {
  className: "text-[9px] text-blue-400 font-bold tracking-widest uppercase leading-none font-en"
}, "Faltah")));
const translations = {
  ar: {
    navfeatures: 'المميزات',
    navhow: 'كيف تعمل',
    navtravelers: 'المسافرين',
    navsenders: 'المرسلين',
    navinvestors: 'للمستثمرين',
    navjoin: 'انضم الآن',
    herobadge: 'قريباً',
    herotitle1: 'شحنتك...',
    herotitle2: 'أسرع من أي وقت.',
    herodesc: 'تطبيق فلته يحول الرحلات اليومية بين المدن إلى شبكة توصيل ذكية. أرسل أغراضك أو اكسب دخلًا إضافيًا بسهولة من خلال تطبيق واحد.',
    heroplaceholder: 'أدخل رقمك أو بريدك...',
    herobtn: 'انضم الآن',
    heroproof: 'انضم 10,000 مستخدم لقائمة الانتظار',
    feattitle: 'مصمم لك',
    featsub: 'تجربة سلسة، كل شيء على بُعد ضغطة داخل التطبيق.',
    feat1t: 'تسعير ثابت تلقائي',
    feat1d: 'بدون تفاوض. التطبيق يحسب السعر العادل فوراً حسب المسافة عبر الخرائط.',
    feat2t: 'تتبع مباشر للرحلة',
    feat2d: 'شاهد حركة سيارة المسافر على الخريطة من الاستلام حتى التسليم.',
    feat3t: 'محفظة رقمية مدمجة',
    feat3d: 'أرباحك تُودع فوراً في محفظتك عند التسليم، واسحبها بضغطة واحدة.',
    rolesenderbadge: 'واجهة المرسل',
    rolesendert1: 'أرسل أغراضك خلال',
    rolesendert2: 'ثوانٍ.',
    rolesenderdesc: 'تجربة لوجستية صممت لتكون الأسرع والأكثر أمانًا. بمجرد التأكيد، يكون المسافر الموثق في الطريق.',
    rolesenderp1t: 'توصيل في نفس اليوم',
    rolesenderp1d: 'شحنتك لا تنتظر بالمستودعات؛ تنطلق فوراً وتصل خلال ساعات.',
    rolesenderp2t: 'أمان متقدم',
    rolesenderp2d: 'المسافرون موثقون عبر نفاذ. التتبع المباشر ورمز OTP يضمنان تسليماً آمناً.',
    roletravbadge: 'واجهة المسافر',
    roletravt1: 'طريقك،',
    roletravt2: 'دخل إضافي.',
    roletravdesc: 'فعّل وضع المسافر. اقبل الطلبات المطابقة لمسارك وحول المساحة الفارغة إلى ربح مضمون.',
    roletravp1t: 'أرباح فورية',
    roletravp1d: 'بعد التسليم وإدخال OTP، تضاف أرباحك فوراً إلى المحفظة.',
    roletravbtn: 'سجّل كمسافر',
    contacttitle: 'تواصل معنا',
    contactsub: 'نحن نبني المستقبل. انضم إلينا في هذه الرحلة.',
    contactc1t: 'استفسارات عامة',
    contactc1d: 'عندك سؤال؟ نحن هنا للمساعدة.',
    contactc2t: 'شراكات استراتيجية',
    contactc2d: 'للمتاجر وشركات الخدمات اللوجستية.',
    contactc3t: 'علاقات المستثمرين',
    contactc3d: 'لاستفسارات جولات الاستثمار.',
    faqtitle: 'الأسئلة الشائعة',
    faqsub: 'إجابات واضحة حول آلية العمل والأمان.',
    footerdesc: 'الجيل القادم من لوجستيات الاقتصاد التشاركي في السعودية. أسرع وأأمن شبكة توصيل بين المدن.',
    footerlinks: 'روابط سريعة',
    footercompany: 'الشركة',
    terms: 'الشروط والأحكام',
    privacy: 'سياسة الخصوصية',
    copyright: '© 2026 Faltah Tech. جميع الحقوق محفوظة. صُنع في السعودية',
    modaltitle: 'تنبيه الإطلاق',
    modaldesc: 'اترك رقمك أو بريدك، وسنرسل لك رابط التحميل فور الإطلاق.',
    modalbtn: 'تأكيد',
    successmsg: 'تم التسجيل بنجاح!',
    mockupsendertitle: 'تأكيد الطلب',
    mockupsenderdriver: 'بيانات المسافر',
    mockupsendername: 'محمد السالم',
    mockupsenderotp: 'رمز التسليم OTP',
    mockupsenderotpwarn: 'لا تشاركه قبل استلام الشحنة',
    mockupsenderbtn: 'تتبع المسار مباشر',
    mockuptravtitle: 'المحفظة',
    mockuptravbalance: 'الرصيد المتاح',
    mockuptravcurrency: 'ريال',
    mockuptravtransfer: 'تحويل إلى الحساب البنكي',
    mockuptravrecent: 'آخر العمليات',
    mockuptravall: 'الكل',
    mockuptravtrip: 'توصيل إلى الرياض',
    mockuptravtime: 'اليوم، 04:30 م'
  },
  en: {
    navfeatures: 'Features',
    navhow: 'How it works',
    navtravelers: 'Travelers',
    navsenders: 'Senders',
    navinvestors: 'Investors',
    navjoin: 'Join Now',
    herobadge: 'Coming Soon',
    herotitle1: 'Your shipment..',
    herotitle2: 'Faster than ever....',
    herodesc: 'Faltah app transforms your daily intercity trips into a smart delivery network. Send items or earn extra income effortlessly in one app.',
    heroplaceholder: 'Enter phone or email...',
    herobtn: 'Join Now',
    heroproof: 'Join 10,000 users on the waitlist',
    feattitle: 'Designed for you',
    featsub: 'A seamless experience, everything is a tap away inside the app.',
    feat1t: 'Automated Fixed Pricing',
    feat1d: 'No bidding. The app instantly calculates a fair price based on distance using built-in maps.',
    feat2t: 'Live Trip Tracking',
    feat2d: 'Watch the traveler’s car move on the map inside the app from pickup to delivery.',
    feat3t: 'Built-in Digital Wallet',
    feat3d: 'Your earnings are instantly deposited into your wallet upon delivery, withdraw with one tap.',
    rolesenderbadge: 'Sender Interface',
    rolesendert1: 'Send items in',
    rolesendert2: 'seconds.',
    rolesenderdesc: 'A logistics experience designed to be the fastest and safest. Once confirmed, a verified traveler is on the way.',
    rolesenderp1t: 'Same-Day Delivery',
    rolesenderp1d: 'Your package doesn’t wait in warehouses; it departs instantly and arrives in hours.',
    rolesenderp2t: 'Advanced Security',
    rolesenderp2d: 'Travelers are Nafath-verified. Live tracking and OTP code guarantee safe delivery.',
    roletravbadge: 'Traveler Interface',
    roletravt1: 'Your route,',
    roletravt2: 'brings income.',
    roletravdesc: 'Enable Traveler mode. Accept delivery requests matching your route and turn empty space into guaranteed profit.',
    roletravp1t: 'Instant Profits',
    roletravp1d: 'Once the package is delivered and the OTP is entered, your earnings are added instantly.',
    roletravbtn: 'Register as Traveler',
    contacttitle: 'Contact Us',
    contactsub: 'We are building the future. Join us on this journey.',
    contactc1t: 'General Inquiries',
    contactc1d: 'Have a question? We are here to help.',
    contactc2t: 'Strategic Partnerships',
    contactc2d: 'For stores and logistics companies.',
    contactc3t: 'Investor Relations',
    contactc3d: 'For investment rounds inquiries.',
    faqtitle: 'FAQs',
    faqsub: 'Transparent answers regarding our operations and safety.',
    footerdesc: 'The next-generation sharing economy logistics in Saudi Arabia. The fastest and safest intercity delivery network.',
    footerlinks: 'Quick Links',
    footercompany: 'Company',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    copyright: '© 2026 Faltah Tech. All rights reserved. Made in KSA',
    modaltitle: 'Launch Alert',
    modaldesc: 'Leave your number or email, and we’ll send the download link once approved.',
    modalbtn: 'Confirm',
    successmsg: 'Successfully registered!',
    mockupsendertitle: 'Confirm Order',
    mockupsenderdriver: 'Traveler Details',
    mockupsendername: 'Mohammed Alsalem',
    mockupsenderotp: 'Delivery Code OTP',
    mockupsenderotpwarn: 'Do not share before receiving shipment',
    mockupsenderbtn: 'Track Route Live',
    mockuptravtitle: 'Wallet',
    mockuptravbalance: 'Available Balance',
    mockuptravcurrency: 'SAR',
    mockuptravtransfer: 'Transfer to Bank Account',
    mockuptravrecent: 'Recent Transactions',
    mockuptravall: 'All',
    mockuptravtrip: 'Delivery to Riyadh',
    mockuptravtime: 'Today, 04:30 PM'
  }
};
const faqData = {
  ar: [{
    q: 'كيف يضمن فلته مستحقاتي كمسافر؟',
    a: 'بعد المطابقة، يدفع المرسل مقدماً. يتم حفظ المبلغ بأمان، وبعد التسليم وتأكيد OTP يتم تحويله فوراً لمحفظتك.'
  }, {
    q: 'هل يتم فحص الشحنات؟',
    a: 'السلامة أولاً. يفرض فلته سياسة صارمة: يجب على المسافر فحص الشحنة المفتوحة وتصويرها قبل قبولها.'
  }, {
    q: 'ماذا لو تأخر المسافر؟',
    a: 'يتم حساب أوقات الوصول المتوقعة. في حال التأخير غير المبرر، يتدخل الدعم على مدار 24/7، والتكرار قد يؤدي لإيقاف الحساب.'
  }],
  en: [{
    q: 'How does Faltah guarantee my payment as a traveler?',
    a: 'Once a request is matched, the sender pays upfront. Funds are held securely. Upon delivery and OTP confirmation, the funds are instantly released to your wallet.'
  }, {
    q: 'Are the packages inspected?',
    a: 'Safety first. Faltah enforces a strict policy where the traveler must inspect and photograph the open package before accepting it.'
  }, {
    q: 'What happens if a traveler is late?',
    a: 'Estimated times are calculated. For unjustified delays, our 24/7 support intervenes. Consistent delays risk account suspension.'
  }]
};
const legalContent = {
  ar: {
    privacy: {
      title: 'سياسة الخصوصية',
      date: '20 نوفمبر 2025',
      sections: [{
        title: '1. المقدمة',
        body: 'في فلته، نلتزم بحماية خصوصيتك. توضح هذه السياسة كيف نجمع معلوماتك ونستخدمها.'
      }, {
        title: '2. جمع البيانات',
        body: 'نجمع المعلومات الشخصية مثل الاسم، الهاتف، هوية نفاذ، بيانات الموقع للتتبع، وتفاصيل العمليات.'
      }, {
        title: '3. استخدام البيانات',
        body: 'لربط المرسلين بالمسافرين، تحسين الخدمة، والامتثال لأنظمة المملكة.'
      }, {
        title: '4. مشاركة البيانات',
        body: 'لا نبيع بياناتك. نشاركها فقط مع الطرف الآخر في الرحلة أو الجهات الرسمية عند الطلب النظامي.'
      }, {
        title: '5. الأمان',
        body: 'نطبق أحدث الإجراءات التقنية لحماية بياناتك.'
      }]
    },
    terms: {
      title: 'الشروط والأحكام',
      date: '20 نوفمبر 2025',
      sections: [{
        title: '1. القبول',
        body: 'باستخدامك لفلته، فإنك توافق على هذه الشروط.'
      }, {
        title: '2. الأهلية',
        body: 'يجب أن يكون عمرك 18 سنة فأكثر، وتقدم بيانات تحقق صحيحة.'
      }, {
        title: '3. المواد المحظورة',
        body: 'يمنع منعاً باتاً أي مواد غير نظامية وفق أنظمة المملكة، مثل المخدرات والأسلحة وغيرها. يتحمل المرسل والمسافر المسؤولية القانونية الكاملة.'
      }, {
        title: '4. المدفوعات',
        body: 'تتم معالجة المدفوعات بأمان داخل التطبيق، وقد تطبق رسوم خدمة.'
      }, {
        title: '5. إخلاء المسؤولية',
        body: 'فلته وسيط تقني، ولسنا مسؤولين عن فقد أو تلف الشحنات الناتج عن سوء استخدام من الأطراف.'
      }]
    }
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      date: 'Nov 20, 2025',
      sections: [{
        title: '1. Introduction',
        body: 'At Faltah, we are committed to protecting your privacy. This policy explains how we collect and use your information.'
      }, {
        title: '2. Data Collection',
        body: 'We collect personal info (Name, Phone, Nafath ID), location data for tracking, and transaction details.'
      }, {
        title: '3. How We Use Data',
        body: 'To connect senders with travelers, improve services, and comply with KSA regulations.'
      }, {
        title: '4. Data Sharing',
        body: 'We do not sell your data. We only share it with the other party involved in the trip, or government authorities if legally required.'
      }, {
        title: '5. Security',
        body: 'We apply the latest technical measures to protect your data.'
      }]
    },
    terms: {
      title: 'Terms & Conditions',
      date: 'Nov 20, 2025',
      sections: [{
        title: '1. Acceptance',
        body: 'By using Faltah, you agree to these terms.'
      }, {
        title: '2. Eligibility',
        body: 'You must be 18+ and provide accurate verification data.'
      }, {
        title: '3. Prohibited Items',
        body: 'Strictly no illegal items per KSA laws (drugs, weapons, etc.). Senders and travelers bear full legal responsibility.'
      }, {
        title: '4. Payments',
        body: 'Payments are processed securely in-app. Service fees may apply.'
      }, {
        title: '5. Disclaimer',
        body: 'Faltah is a technical intermediary. We are not liable for lost/damaged items due to user misconduct.'
      }]
    }
  }
};
const LoaderIcon = () => /*#__PURE__*/React.createElement("svg", {
  className: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/React.createElement("circle", {
  className: "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  strokeWidth: "4"
}), /*#__PURE__*/React.createElement("path", {
  className: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}));
const AppMockupSender = ({
  lang,
  t
}) => /*#__PURE__*/React.createElement("div", {
  className: "iphone-frame transform rotate-3 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]",
  dir: lang === 'ar' ? 'rtl' : 'ltr'
}, /*#__PURE__*/React.createElement("div", {
  className: "dynamic-island"
}), /*#__PURE__*/React.createElement("div", {
  className: "app-screen pt-14 px-5 pb-6 relative bg-[#F8FAFC]"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between mb-6 z-10 relative"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-2xl text-slate-900 tracking-tight"
}, t('mockupsendertitle'))), /*#__PURE__*/React.createElement("div", {
  className: "relative z-10 flex flex-col h-full"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-white p-5 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 mb-5 relative overflow-hidden"
}, /*#__PURE__*/React.createElement("div", {
  className: `absolute top-0 w-24 h-24 bg-blue-50 pointer-events-none opacity-50 ${lang === 'ar' ? 'right-0 rounded-bl-[100px]' : 'left-0 rounded-br-[100px]'}`
}), /*#__PURE__*/React.createElement("p", {
  className: `text-[12px] text-slate-400 mb-3 font-bold tracking-wider ${lang === 'ar' ? 'text-right' : 'text-left'}`
}, t('mockupsenderdriver')), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between relative z-10"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "relative"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-14 h-14 bg-gradient-to-tr from-blue-100 to-white rounded-full flex items-center justify-center border-2 border-blue-100 overflow-hidden p-0.5"
}, /*#__PURE__*/React.createElement("img", {
  src: "https://i.pravatar.cc/100?img=11",
  alt: "driver",
  className: "w-full h-full object-cover rounded-full"
})), /*#__PURE__*/React.createElement("div", {
  className: `absolute bottom-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm ${lang === 'ar' ? 'right-0' : 'left-0'}`
})), /*#__PURE__*/React.createElement("div", {
  className: `${lang === 'ar' ? 'text-right' : 'text-left'}`
}, /*#__PURE__*/React.createElement("p", {
  className: `font-black text-base text-slate-900 flex items-center gap-1.5 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`
}, lang === 'ar' ? /*#__PURE__*/React.createElement("svg", {
  className: "w-4 h-4 text-blue-500",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"
})) : null, t('mockupsendername'), lang === 'en' ? /*#__PURE__*/React.createElement("svg", {
  className: "w-4 h-4 text-blue-500",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"
})) : null), /*#__PURE__*/React.createElement("div", {
  className: `flex items-center gap-1.5 mt-1 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`
}, /*#__PURE__*/React.createElement("span", {
  className: "text-[12px] font-bold text-slate-800"
}, "4.9"), /*#__PURE__*/React.createElement("span", {
  className: "text-amber-400 text-sm"
}, "\u2605")))))), /*#__PURE__*/React.createElement("div", {
  className: "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 rounded-[32px] shadow-[0_20px_40px_rgba(10,132,255,0.3)] mb-auto relative overflow-hidden"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-white/80 text-[12px] font-bold tracking-widest text-center mb-5 relative z-10"
}, t('mockupsenderotp')), /*#__PURE__*/React.createElement("div", {
  className: "flex justify-center gap-3.5 mb-6 relative z-10",
  dir: "ltr"
}, [8, 4, 9, 2].map((num, idx) => /*#__PURE__*/React.createElement("div", {
  key: idx,
  className: "w-14 h-16 bg-white/10 backdrop-blur-xl border border-white/30 rounded-[18px] flex items-center justify-center text-4xl font-black text-white shadow-inner"
}, num))), /*#__PURE__*/React.createElement("div", {
  className: "bg-black/20 backdrop-blur-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-white/10 w-fit mx-auto relative z-10"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-[11px] font-bold text-white/90"
}, t('mockupsenderotpwarn'))), /*#__PURE__*/React.createElement("button", {
  className: "w-full bg-slate-900 text-white py-4 rounded-[20px] font-black mt-5 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-black transition-all hover:-translate-y-1"
}, t('mockupsenderbtn')))), /*#__PURE__*/React.createElement("div", {
  className: "home-indicator bg-black"
})));
const AppMockupTraveler = ({
  lang,
  t
}) => /*#__PURE__*/React.createElement("div", {
  className: "iphone-frame transform -rotate-3 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]",
  dir: lang === 'ar' ? 'rtl' : 'ltr'
}, /*#__PURE__*/React.createElement("div", {
  className: "dynamic-island"
}), /*#__PURE__*/React.createElement("div", {
  className: "app-screen bg-[#050505] text-white pt-14 px-5 pb-6"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between mb-8 z-10 relative"
}, /*#__PURE__*/React.createElement("h3", {
  className: "font-black text-2xl text-white tracking-tight"
}, t('mockuptravtitle'))), /*#__PURE__*/React.createElement("div", {
  className: "bg-gradient-to-br from-slate-800 via-slate-900 to-black p-7 rounded-[32px] mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700 relative overflow-hidden"
}, /*#__PURE__*/React.createElement("p", {
  className: `text-slate-400 text-sm mb-2 font-medium relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`
}, t('mockuptravbalance')), /*#__PURE__*/React.createElement("div", {
  className: `flex items-baseline gap-2 mb-8 relative z-10 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`,
  dir: lang === 'ar' ? 'rtl' : 'ltr'
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-5xl font-black text-white tracking-tight"
}, "450"), /*#__PURE__*/React.createElement("span", {
  className: "text-xl text-green-400 font-bold"
}, t('mockuptravcurrency'))), /*#__PURE__*/React.createElement("button", {
  className: "w-full bg-white text-black font-black py-4 rounded-2xl text-sm shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:bg-gray-100 transition-colors relative z-10"
}, t('mockuptravtransfer'))), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between mb-5"
}, /*#__PURE__*/React.createElement("h4", {
  className: "font-bold text-lg text-white"
}, t('mockuptravrecent')), /*#__PURE__*/React.createElement("span", {
  className: "text-xs text-blue-400 font-bold"
}, t('mockuptravall'))), /*#__PURE__*/React.createElement("div", {
  className: "space-y-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "bg-[#111] border border-white/5 p-4 rounded-[20px] flex justify-between items-center"
}, /*#__PURE__*/React.createElement("div", {
  className: `flex items-center gap-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  className: "font-bold text-sm text-white mb-1"
}, t('mockuptravtrip')), /*#__PURE__*/React.createElement("p", {
  className: "text-[11px] text-gray-500 font-medium"
}, t('mockuptravtime')))), /*#__PURE__*/React.createElement("span", {
  className: "text-green-400 font-black text-lg",
  dir: "ltr"
}, "+80"))), /*#__PURE__*/React.createElement("div", {
  className: "home-indicator bg-white/30"
})));
const WaitlistForm = ({
  waitlistInput,
  setWaitlistInput,
  submitStatus,
  onSubmit,
  t
}) => /*#__PURE__*/React.createElement("form", {
  onSubmit: onSubmit,
  className: "flex flex-col sm:flex-row gap-3 w-full"
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  required: true,
  value: waitlistInput,
  onChange: e => setWaitlistInput(e.target.value),
  placeholder: t('heroplaceholder'),
  className: "flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-blue-500 focus:outline-none focus:bg-white/10 transition-all min-w-0"
}), /*#__PURE__*/React.createElement("button", {
  type: "submit",
  disabled: submitStatus === 'loading',
  className: "bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25 whitespace-nowrap disabled:opacity-70 flex justify-center items-center"
}, submitStatus === 'loading' ? /*#__PURE__*/React.createElement(LoaderIcon, null) : submitStatus === 'success' ? t('successmsg') : t('herobtn')));
function App() {
  const [lang, setLang] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [openFaq, setOpenFaq] = useState(null);
  const [waitlistInput, setWaitlistInput] = useState('');
  const [submitStatus, setSubmitStatus] = useState('idle');
  const t = key => translations[lang][key] || key;
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    const setupObserver = () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      }, {
        threshold: 0.1
      });
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
      return observer;
    };
    const observer = setupObserver();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentPage, lang]);
  const toggleLang = e => {
    if (e) e.preventDefault();
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
    setIsMenuOpen(false);
  };
  const handleWaitlistSubmit = async e => {
    if (e) e.preventDefault();
    if (!waitlistInput.trim()) return;
    setSubmitStatus('loading');
    const SCRIPTURL = 'https://script.google.com/macros/s/AKfycb.../exec';
    try {
      await fetch(SCRIPTURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact: waitlistInput
        })
      });
      setSubmitStatus('success');
      setWaitlistInput('');
      setTimeout(() => {
        setSubmitStatus('idle');
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('idle');
    }
  };
  const navigateTo = (page, e) => {
    if (e) e.preventDefault();
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleScrollLink = (id, e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const renderLegalPage = () => {
    const data = legalContent[lang][currentPage];
    if (!data) return null;
    return /*#__PURE__*/React.createElement("main", {
      className: "pt-40 pb-24 min-h-[80vh] relative z-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container mx-auto max-w-3xl px-6 fade-up"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: e => navigateTo('home', e),
      className: "flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-8 font-bold transition-colors w-fit"
    }, /*#__PURE__*/React.createElement("span", {
      className: lang === 'ar' ? 'rotate-180' : ''
    }, Icons.ArrowLeft), lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'), /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl md:text-5xl font-black text-white mb-4"
    }, data.title), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-500 mb-12"
    }, data.date), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8"
    }, data.sections.map((sec, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bg-[#111] border border-white/5 p-8 rounded-[32px]"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-white mb-4"
    }, sec.title), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400 leading-relaxed text-[15px]"
    }, sec.body))))));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: lang === 'en' ? 'font-en' : ''
  }, /*#__PURE__*/React.createElement("nav", {
    className: `fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-3' : 'bg-transparent py-5'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-7xl px-6 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    onClick: e => navigateTo('home', e)
  }), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-8 text-sm font-bold text-gray-300"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    onClick: e => handleScrollLink('features', e),
    className: "hover:text-white transition-colors"
  }, t('navfeatures')), /*#__PURE__*/React.createElement("a", {
    href: "#roles",
    onClick: e => handleScrollLink('roles', e),
    className: "hover:text-white transition-colors"
  }, t('navhow')), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => handleScrollLink('contact', e),
    className: "hover:text-white transition-colors"
  }, t('navinvestors'))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 z-50"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleLang,
    className: "hidden md:flex items-center gap-2 text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-bold hover:bg-white/10 transition-colors font-en"
  }, lang === 'ar' ? 'English' : 'العربية', Icons.Globe), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowModal(true),
    className: "hidden md:flex bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-500 transition-colors"
  }, t('navjoin')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsMenuOpen(!isMenuOpen),
    className: "md:hidden text-white"
  }, isMenuOpen ? Icons.X : Icons.Menu)))), isMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/95 z-40 pt-24 px-6 md:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex flex-col gap-6 text-xl font-bold text-white ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    onClick: e => handleScrollLink('features', e)
  }, t('navfeatures')), /*#__PURE__*/React.createElement("a", {
    href: "#roles",
    onClick: e => handleScrollLink('roles', e)
  }, t('navhow')), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => handleScrollLink('contact', e)
  }, t('navinvestors')), /*#__PURE__*/React.createElement("button", {
    onClick: e => navigateTo('terms', e),
    className: lang === 'ar' ? 'text-right' : 'text-left'
  }, t('terms')), /*#__PURE__*/React.createElement("button", {
    onClick: e => navigateTo('privacy', e),
    className: lang === 'ar' ? 'text-right' : 'text-left'
  }, t('privacy')), /*#__PURE__*/React.createElement("button", {
    onClick: toggleLang,
    className: `flex items-center gap-2 font-en ${lang === 'ar' ? 'justify-end flex-row-reverse' : 'justify-start'}`
  }, lang === 'ar' ? 'English' : 'العربية', Icons.Globe), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowModal(true);
      setIsMenuOpen(false);
    },
    className: "bg-blue-500 py-4 rounded-xl mt-4 text-white text-center w-full"
  }, t('navjoin')))), currentPage === 'home' ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "pt-32 pb-20 lg:pt-48 lg:pb-32 relative min-h-[90vh] flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-12 left-12 -translate-x-12 -translate-y-12 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-7xl px-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row items-center gap-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: `lg:w-1/2 text-center fade-up ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold mb-6 backdrop-blur-sm"
  }, t('herobadge')), /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl lg:text-7xl font-black text-white leading-[1.2] mb-6"
  }, t('herotitle1'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-500"
  }, t('herotitle2'))), /*#__PURE__*/React.createElement("p", {
    className: `text-lg lg:text-xl text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed ${lang === 'ar' ? 'lg:mx-0 lg:mr-auto lg:ml-0' : 'lg:mx-0 lg:mr-auto lg:ml-0'}`
  }, t('herodesc')), /*#__PURE__*/React.createElement("div", {
    className: `max-w-md mx-auto ${lang === 'ar' ? 'lg:mx-0 lg:mr-auto lg:ml-0' : 'lg:mx-0 lg:mr-auto lg:ml-0'}`
  }, /*#__PURE__*/React.createElement(WaitlistForm, {
    waitlistInput: waitlistInput,
    setWaitlistInput: setWaitlistInput,
    submitStatus: submitStatus,
    onSubmit: handleWaitlistSubmit,
    t: t
  }), /*#__PURE__*/React.createElement("p", {
    className: `text-xs text-gray-500 mt-4 font-medium flex items-center justify-center gap-2 ${lang === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2 w-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full h-2 w-2 bg-green-500"
  })), t('heroproof')))), /*#__PURE__*/React.createElement("div", {
    className: `lg:w-1/2 relative h-[650px] w-full flex justify-center fade-up ${lang === 'ar' ? 'lg:justify-end' : 'lg:justify-start'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative z-20",
    style: {
      animation: 'float1 6s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement(AppMockupSender, {
    lang: lang,
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    className: `absolute top-10 z-10 opacity-70 hidden md:block ${lang === 'ar' ? '-right-24' : '-left-24'}`,
    style: {
      animation: 'float2 7s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement(AppMockupTraveler, {
    lang: lang,
    t: t
  })))))), /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "py-24 bg-[#0a0a0a] border-y border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-16 fade-up"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl lg:text-5xl font-black mb-4"
  }, t('feattitle')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg"
  }, t('featsub'))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, [{
    title: t('feat1t'),
    desc: t('feat1d'),
    icon: '💸'
  }, {
    title: t('feat2t'),
    desc: t('feat2d'),
    icon: '📍'
  }, {
    title: t('feat3t'),
    desc: t('feat3d'),
    icon: '💼'
  }].map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bg-[#111] p-8 rounded-[32px] border border-white/5 fade-up hover:border-blue-500/30 transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center"
  }, f.icon), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold mb-3"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-relaxed text-sm"
  }, f.desc)))))), /*#__PURE__*/React.createElement("section", {
    id: "roles",
    className: "py-32 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-20 right-[-10px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-20 left-[-10px] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-7xl px-6 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-center gap-16 lg:gap-24 mb-40"
  }, /*#__PURE__*/React.createElement("div", {
    className: `md:w-1/2 fade-up ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm mb-8 ${lang === 'en' ? 'flex-row-reverse' : ''}`
  }, t('rolesenderbadge')), /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl lg:text-6xl font-black mb-6 leading-[1.1]"
  }, t('rolesendert1'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"
  }, t('rolesendert2'))), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg lg:text-xl leading-relaxed mb-10"
  }, t('rolesenderdesc')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-[20px] bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0"
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-bold text-xl mb-2"
  }, t('rolesenderp1t')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, t('rolesenderp1d')))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-[20px] bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0"
  }, "\uD83D\uDD10"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-bold text-xl mb-2"
  }, t('rolesenderp2t')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, t('rolesenderp2d')))))), /*#__PURE__*/React.createElement("div", {
    className: "md:w-1/2 flex justify-center fade-up"
  }, /*#__PURE__*/React.createElement(AppMockupSender, {
    lang: lang,
    t: t
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: `md:w-1/2 fade-up ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-sm mb-8 ${lang === 'en' ? 'flex-row-reverse' : ''}`
  }, t('roletravbadge')), /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl lg:text-6xl font-black mb-6 leading-[1.1]"
  }, t('roletravt1'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500"
  }, t('roletravt2'))), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg lg:text-xl leading-relaxed mb-10"
  }, t('roletravdesc')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-[20px] bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0"
  }, "\uD83D\uDCB0"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-bold text-xl mb-2"
  }, t('roletravp1t')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm"
  }, t('roletravp1d'))))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowModal(true),
    className: "bg-white text-black px-10 py-4 rounded-[20px] font-black text-lg hover:bg-gray-200 transition-transform hover:-translate-y-1"
  }, t('roletravbtn'))), /*#__PURE__*/React.createElement("div", {
    className: "md:w-1/2 flex justify-center fade-up"
  }, /*#__PURE__*/React.createElement(AppMockupTraveler, {
    lang: lang,
    t: t
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "py-24 bg-[#050505] border-t border-white/5 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-6xl px-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl lg:text-5xl font-black text-white mb-4"
  }, t('contacttitle')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg mb-16"
  }, t('contactsub')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, [{
    title: t('contactc1t'),
    desc: t('contactc1d'),
    email: 'hello@faltah.tech',
    icon: '✉️',
    color: 'text-green-400'
  }, {
    title: t('contactc2t'),
    desc: t('contactc2d'),
    email: 'partners@faltah.tech',
    icon: '🤝',
    color: 'text-purple-400'
  }, {
    title: t('contactc3t'),
    desc: t('contactc3d'),
    email: 'investors@faltah.tech',
    icon: '📈',
    color: 'text-yellow-400'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bg-[#0f1115] border border-white/5 p-8 rounded-3xl flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl mb-4"
  }, c.icon), /*#__PURE__*/React.createElement("h3", {
    className: `text-xl font-black mb-2 ${c.color}`
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm mb-8"
  }, c.desc), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${c.email}`,
    className: "w-full mt-auto bg-[#1a1c23] hover:bg-[#252830] transition-colors text-gray-300 font-en py-3 rounded-xl text-sm tracking-wide"
  }, c.email)))))), /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "py-24 bg-[#0a0a0a] border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-3xl px-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-black text-white mb-4 text-center"
  }, t('faqtitle')), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg mb-16 text-center"
  }, t('faqsub')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, faqData[lang].map((item, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: `faq-item bg-[#111] border border-white/5 rounded-2xl ${openFaq === idx ? 'active border-blue-500/30' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenFaq(openFaq === idx ? null : idx),
    className: `w-full flex justify-between items-center p-6 text-slate-200 font-bold ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, /*#__PURE__*/React.createElement("span", null, item.q), Icons.ChevronDown), /*#__PURE__*/React.createElement("div", {
    className: "faq-answer px-6"
  }, /*#__PURE__*/React.createElement("p", {
    className: `pb-6 text-slate-400 text-sm border-t border-slate-800 pt-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, item.a)))))))) : renderLegalPage(), /*#__PURE__*/React.createElement("footer", {
    className: "pt-20 pb-10 border-t border-white/10 bg-[#050505]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto max-w-7xl px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-8 mb-8 ${lang === 'en' ? 'md:flex-row-reverse' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex flex-col items-center ${lang === 'ar' ? 'md:items-start' : 'md:items-end'} gap-4`
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    onClick: e => navigateTo('home', e)
  }), /*#__PURE__*/React.createElement("div", {
    className: `flex items-center gap-3 mt-2 text-gray-400 text-sm ${lang === 'en' ? 'flex-row-reverse' : ''}`
  }, /*#__PURE__*/React.createElement("span", null, lang === 'ar' ? 'تابعنا' : 'Follow us'), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/company/faltahtech",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-blue-500 transition-colors"
  }, Icons.LinkedIn))), /*#__PURE__*/React.createElement("div", {
    className: `flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-400 ${lang === 'en' ? 'flex-row-reverse' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    onClick: e => handleScrollLink('features', e),
    className: "hover:text-white transition-colors"
  }, t('navfeatures')), /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    onClick: e => handleScrollLink('faq', e),
    className: "hover:text-white transition-colors"
  }, t('faqtitle')), /*#__PURE__*/React.createElement("button", {
    onClick: e => navigateTo('privacy', e),
    className: "hover:text-white transition-colors"
  }, t('privacy')), /*#__PURE__*/React.createElement("button", {
    onClick: e => navigateTo('terms', e),
    className: "hover:text-white transition-colors"
  }, t('terms')))), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-sm text-gray-600 font-medium pt-4"
  }, /*#__PURE__*/React.createElement("p", null, t('copyright'))))), showModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-[100] flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
    onClick: () => setShowModal(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-md bg-[#111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-6 py-4 border-b border-white/10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white"
  }, t('modaltitle')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowModal(false)
  }, Icons.X)), /*#__PURE__*/React.createElement("div", {
    className: "p-8"
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-gray-400 text-sm mb-6 leading-relaxed ${lang === 'ar' ? 'text-right' : 'text-left'}`
  }, t('modaldesc')), /*#__PURE__*/React.createElement(WaitlistForm, {
    waitlistInput: waitlistInput,
    setWaitlistInput: setWaitlistInput,
    submitStatus: submitStatus,
    onSubmit: handleWaitlistSubmit,
    t: t
  })))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
