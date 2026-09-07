import json

wheel_loaders = [
    # Brand, Model, Weight, HP, Bucket, Ton, App, CategoryLabel
    ("XCMG", "XCMG ZL30GV / LW300FN", "10.6", "125", "1.8 - 2.2 m³", "3-Tonne", "Infrastructure, Aggregates & Batching Plants", "3-Tonne Payload"),
    ("XCMG", "XCMG ZL50GN / LW500FN", "17.5", "220", "3.0 - 4.0 m³", "5-Tonne", "Quarry Loading, Port Logistics & Cement Plants", "5-Tonne Payload"),
    ("XCMG", "XCMG XC958EV / XC956EV", "18.5", "220", "3.0 - 3.5 m³", "5.5-Tonne", "Green Mining & Industrial Material Handling", "5-Tonne EV"),
    ("XCMG", "XCMG XC968 / LW600KN", "20.5", "240", "3.5 - 4.5 m³", "6-Tonne", "Heavy Aggregate Quarries & Bulk Coal Operations", "6-Tonne Payload"),
    ("XCMG", "XCMG XC975", "25", "290", "4.2 - 5.5 m³", "7-Tonne", "Iron Ore Mining & Steel Mill Material Handling", "7-Tonne Payload"),
    ("XCMG", "XCMG XC998 / LW1200K", "52", "590", "6.5 - 11.0 m³", "12-Tonne", "Large Mining Open-pit Bulk Material Loading", "Heavy Mining"),

    ("LiuGong", "LiuGong 835H / 835T", "10.3", "131", "1.8 - 2.3 m³", "3-Tonne", "Sand/Gravel Loading, Crushing Plants & Construction", "3-Tonne Payload"),
    ("LiuGong", "LiuGong 856H / 856H MAX", "17.1", "220", "3.0 - 4.2 m³", "5-Tonne", "Mining, Heavy Quarrying, Crushing & Port Material Handling", "5-Tonne Payload"),
    ("LiuGong", "LiuGong 856H-E MAX (Electric)", "18", "215", "3.5 - 4.0 m³", "5.5-Tonne", "Zero-Emission Heavy Mining & Tunneling Operations", "5-Tonne EV"),
    ("LiuGong", "LiuGong 862H", "20", "240", "3.5 - 5.0 m³", "6-Tonne", "Coal Handling, Mining & Heavy Quarry Loading", "6-Tonne Payload"),
    ("LiuGong", "LiuGong 877H", "24.5", "300", "4.2 - 5.5 m³", "7-Tonne", "Large Ore Mines, Steel Plants & Port Bulk Handling", "7-Tonne Payload"),
    ("LiuGong", "LiuGong 886H", "27.5", "350", "4.5 - 6.0 m³", "8-Tonne", "Heavy Duty Open-cast Mining & Ore Rehandling", "8-Tonne Payload"),
    ("LiuGong", "LiuGong 890H / 8128H", "50", "525", "7.0 - 12.0 m³", "12-Tonne", "Ultra-Heavy Mining & Large Open-pit Loading", "Heavy Mining")
]

excavators = [
    # Brand, Model, Weight, HP, Bucket, CategoryLabel, App
    ("XCMG", "XE210i", "21", "150", "0.90 - 1.05 m³", "Standard Crawler", "Infrastructure, Civil Utilities & Foundation Work"),
    ("XCMG", "XE215i / XE215iK LC", "21.5", "160", "1.00 - 1.10 m³", "Heavy Duty LC", "General Earthmoving, Roadworks & Urban Infra"),
    ("XCMG", "XE230C LC", "23", "175", "1.10 - 1.25 m³", "Heavy Duty LC", "Heavy Earthworks & Aggregate Loading"),
    ("XCMG", "XE245i LR (Long Reach)", "24.5", "175", "0.45 - 0.60 m³", "Long Boom & Arm", "River Dredging, Slope Cutting & Deep Digging"),
    ("XCMG", "XE250C GM / XE250LC-K", "25", "185", "1.20 - 1.40 m³", "Heavy Duty Track", "Quarry Loading, Crushing Plants & Road Works"),

    ("SANY", "SY210C-9", "21", "140", "0.93 - 1.00 m³", "Standard Track", "Infrastructure & General Earthmoving"),
    ("SANY", "SY210C-9 LR (Long Reach)", "21.2", "140", "0.45 - 0.60 m³", "Extra Long Arm (15m)", "River Dredging, Deep Canal & Tank Cleaning"),
    ("SANY", "SY215C-9LC SPARC", "21.5", "155", "1.02 - 1.20 m³", "Reinforced LC Track", "Heavy Earthworks, Trenching & Aggregate Loading"),
    ("SANY", "SY225C-9", "22.5", "170", "1.20 - 1.40 m³", "Heavy Duty Track", "Quarrying, Hard Soil Digging & Stone Crushing Feed"),
    ("SANY", "SY245H / SY245C-9", "24.5", "177", "1.20 - 1.40 m³", "Heavy Duty Mine Spec", "Rock Excavation, Quarries & Tough Earthwork"),

    ("Tata Hitachi", "EX 200LC / EX 210LC Prime", "21", "133", "0.90 - 1.05 m³", "Long Crawler (LC)", "General Infra, Earthmoving, Construction & Quarrying"),
    ("Tata Hitachi", "ZAXIS 220LC", "22", "170", "1.00 - 1.20 m³", "Heavy Duty LC", "Heavy Earthmoving, Road Construction & Quarrying"),
    ("Tata Hitachi", "ZAXIS 230LC / ZAXIS 240H", "24", "177", "1.10 - 1.30 m³", "Heavy Duty (H)", "Tough Excavation, Quarry Support & Stone Mining"),

    ("JCB", "JCB NXT 215LC", "21.5", "140", "1.00 - 1.05 m³", "Heavy Duty LC", "Infrastructure, General Excavation & Earthworks"),
    ("JCB", "JCB NXT 225LC / 225LCM", "22.5", "148", "1.05 - 1.15 m³", "Mine Spec Track (LCM)", "Heavy Construction & Stone Quarry Loading"),
    ("JCB", "JCB 245XR (Compact Tail)", "24.5", "173", "1.20 - 1.30 m³", "Reduced Tail Swing", "Confined Workspaces, Urban Infra & Highway Projects"),
    ("JCB", "JCB NXT 245LC", "24.6", "173", "1.20 - 1.35 m³", "Heavy Duty LC", "Mass Excavation, Quarry Support & Large Earthworks")
]

items = []

for i, (brand, model, weight, hp, bucket, ton, app, cat_label) in enumerate(wheel_loaders):
    category = 'ev-equipment' if 'EV' in cat_label or 'Electric' in cat_label else 'mining' if 'Mining' in cat_label else 'wheel-loader'
    stock_url = f"https://placehold.co/800x500/18181B/FFFFFF?text={model.replace(' ', '+').replace('/', '%2F')}"
    item = f"""  {{
    id: 'wl-{i}',
    name: '{model}',
    model: '{model.split(" / ")[0]}',
    category: '{category}',
    categoryLabel: '{cat_label}',
    type: 'Wheel Loader',
    brand: '{brand}',
    operatingWeight: '{weight} Tonnes',
    payload: '{ton}',
    bucketCapacity: '{bucket}',
    enginePower: '{hp} HP',
    yearOfManufacture: 2024,
    condition: 'Brand New',
    availability: 'Ready for Dispatch',
    image: '{stock_url}',
    description: 'A {weight}-tonne heavy-duty wheel loader by {brand}, perfect for {app.lower()}.',
    highlightFeatures: ['Optimized for {cat_label}', '{hp} HP High-Performance Engine', 'Ideal for {app.split(",")[0]}'],
    specs: {{
      operatingWeightKg: {float(weight) * 1000},
    }},
    suitableFor: [{', '.join([f"'{a.strip()}'" for a in app.split(',') if a.strip()])}]
  }}"""
    items.append(item)

for i, (brand, model, weight, hp, bucket, cat_label, app) in enumerate(excavators):
    category = 'long-reach' if 'Long Reach' in cat_label or 'Long Arm' in cat_label else 'mining' if 'Mine' in cat_label else 'excavator'
    stock_url = f"https://placehold.co/800x500/18181B/FFA500?text={brand.replace(' ', '+')}+{model.replace(' ', '+').replace('/', '%2F')}"
    item = f"""  {{
    id: 'ex-{i}',
    name: '{brand} {model}',
    model: '{model.split(" / ")[0]}',
    category: '{category}',
    categoryLabel: '{cat_label}',
    type: 'Excavator',
    brand: '{brand}',
    operatingWeight: '{weight} Tonnes',
    maxDiggingDepth: '{cat_label}',
    bucketCapacity: '{bucket}',
    enginePower: '{hp} HP',
    yearOfManufacture: 2024,
    condition: 'Brand New',
    availability: 'Ready for Dispatch',
    image: '{stock_url}',
    description: 'A {weight}-tonne {cat_label.lower()} excavator from {brand}, engineered for {app.lower()}.',
    highlightFeatures: ['{cat_label} Configuration', '{hp} HP Reliable Engine', 'Durable {brand} Hydraulics'],
    specs: {{
      operatingWeightKg: {float(weight) * 1000},
    }},
    suitableFor: [{', '.join([f"'{a.strip()}'" for a in app.split(',') if a.strip()])}]
  }}"""
    items.append(item)

header = '''import { EquipmentItem } from '../types';

export const EQUIPMENT_INVENTORY: EquipmentItem[] = [
'''

footer = '''
];

export const GHANA_LOCATIONS = [
  { value: 'accra-tema', label: 'Greater Accra / Tema Port Hub', zone: 'Primary Fleet Yard' },
  { value: 'kumasi-ashanti', label: 'Kumasi & Ashanti Region', zone: '4hr Dispatch Zone' },
  { value: 'takoradi-western', label: 'Sekondi-Takoradi (Western Hub)', zone: 'Rapid Port Line' },
  { value: 'tarkwa-mining', label: 'Tarkwa / Prestea Mining Corridor', zone: 'Dedicated Tech Base' },
  { value: 'obuasi-mining', label: 'Obuasi Gold Mining District', zone: 'Mining SLA Zone' },
  { value: 'eastern-koforidua', label: 'Eastern Region / Koforidua / Shai Hills', zone: 'Quarry Belt' },
  { value: 'central-cape-coast', label: 'Central Region (Cape Coast / Winneba)', zone: 'Civil Works' },
  { value: 'northern-tamale', label: 'Northern Corridor (Tamale / Bolgatanga)', zone: 'Scheduled Mobilization' },
];

export const COMPANY_STATS = [
  { value: '99.4%', label: 'Equipment Uptime SLA', description: 'Engineered for uninterrupted operation in tropical conditions' },
  { value: '14+', label: 'Heavy Units in Yard', description: 'Inspected and certified ready for immediate site mobilization' },
  { value: '< 24h', label: 'Emergency Tech Response', description: 'Mobile technician teams stationed in Tema, Kumasi & Tarkwa' },
  { value: '100%', label: 'OEM Genuine Spares', description: 'Direct manufacturer spare parts guarantee' },
];
'''

with open('src/data/equipmentData.ts', 'w', encoding='utf-8') as f:
    f.write(header + ",\n".join(items) + footer)

