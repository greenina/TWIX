let facials_element = [
  'doc',
  'Price',
  'Skin Type',
  'Item Form',
  'Finish',
  'Active Ingredient',
  'Main Feature',
  'Ratings',
];
let facials = [
  [
    '1',
    '27000',
    'Sensitive, Troubled',
    'Oil',
    'Sticky',
    'Hyaluronic Acid, Panthenol, Glucoside, Aloe Vera',
    'Soothing, Nutritive',
    '4.8',
  ],
  [
    '7',
    '25000',
    'Combination, Sensitive, Troubled',
    'Watery',
    'Fresh, Cool',
    'Propanediol, Bottleweed Extract, Panthenol',
    'Trouble Care, Hypoallergenic',
    '4.3',
  ],
  [
    '8',
    '32000',
    'Dry, Sensitive, Troubled',
    'Cream',
    'Soft, Fresh',
    'Butylene Glycol, Capric Triglyceride, Vegetable Oil',
    'Soothing, Nutritive',
    '4.9',
  ],
  [
    '9',
    '8000',
    'Normal, Sensitive',
    'Watery',
    'Soft, Cool',
    'Propanediol, Glycerin, Cyclohexyloxane',
    'Wrinkle Improvement',
    '3.2',
  ],
  [
    '10',
    '8000',
    'Oily, Troubled',
    'Cream',
    'Sticky',
    'Butylene Glycol, Apple Water, Olive Oil, Glycerin',
    'Soothing, Trouble Care',
    '3.7',
  ],
];



let tissue_element = [

  'docs', 
  'price',
  'ply rating',
  'main feature', 
  'material',
  'sheet count',
  'package type',
  'rating',
];

let tissue = [

  ['16', '6000', '2-ply', ' Natural pulp, No fluorescence, Colorless, Fragrance free', 'cotton', '3', 'pack', '4.0'],
  ['17', '11000', '3-ply', ' Natural pulp, No fluorescence, Colorless, Fragrance free', 'cotton', '30', 'roll', '4.1'],
  ['18', '1000' , '2-ply', ' Natural pulp, No fluorescence, Fragrance free', 'cotton', '840', 'pack', '4.2' ],
  ['3', '11000', '3-ply',  ' Natural pulp, No fluorescence, Colorless, Fragrance free','cotton', '4', 'pack', '4.1'],





];

let toothpaste_element=[
  'docs',
  'price',
  'main feature', 
  'capacity', 
  'formulation',
  'rating'

];


let toothpaste =[
  ['4', '11000', 'Fluorine free,  Colorless, No CPC', '50', 'solid', '4.5'],
['19', '12800', 'Colorless', '120g', 'tube', '4.7'],
['20', '8700', 'Fluorine free,  Colorless, No CPC', '120g', 'tube', '5'],
['21', '800', 'None', '120g', 'tube', '4.8'],
['22', '700', 'Fluorine free,  No CPC', '160g', 'tube', '4.8'],

];

let scrubber_element = [
  'docs', 
  'price',
  'material',
  'rating',
];
let scrubber =[

  ['27', '5000', 'Loofah cucumber', '4.9'],
  ['28', '10000', 'Burlap', '4.5'],
  ['29', '7000', 'Burlap', '3.9'],
  ['30', '15000', 'plastic', '4.7'],
  ['31', '6000', 'plastic', '4.0'],
];

let bag_element=[
  'docs',
  'price',
  'purpose',
  'material', 
  'capacity', 
  'safety', 
  'waterproof', 
  'strap drop', 
  'pockets', 
  'rating',

];
let bag =[

  ['5', '79000', 'backpack', 'recycled fiber', 'laptops, chargers, and iPads', 'X', 'X', '55~74', 'one zipper pocket, two-stage inner storage', '4.8'],
  ['23', '49000', 'crossbody bag', 'recycled fiber', 'smartphones, cards, and cash', 'X', 'X', '55~109', 'two zipper-pockets, one slot pocket', '4.5'],
  ['24', '32000', 'pocket bag', 'recycled fiber', 'smartphone, muld-card pouch, Airpod case and mask', 'X', 'X', 'cross strap', 'frot pocket', '4.3'],
  ['25', '15000', 'hip pack', 'polyester', 'smartphone, muld-card pouch, Airpod case and mask', 'X', 'O', 'cross strap', 'two pockets, one mesh inner pocket', '4.7'],
  ['26', '32000', 'backpack', 'polyester', 'laptops, chargers, and iPads', 'X', 'O', '48~76', 'two zipper pocket', '4.5'],

  
]

export { facials_element, facials };
export {tissue_element, tissue};
export {toothpaste_element, toothpaste};
export {scrubber_element, scrubber};