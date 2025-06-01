const COUNTRY_REGIONS = {
// Asian    
    'ID': '1', 
    'JP': '1',
    'CN': '4', 
    'KR': '4',
    'IN': '4',
 
// America
    'US': '2', 
    'CA': '2',
    'MX': '2',
    'BR': '6', 


// Europe
    'DE': '3',
    'GB': '3',

//Australia    
    'AU': '5',

//Russian    
    'RU': '7'
};

function generateMetricId(countryCode) {
    // Get region number or default to '0' if not found
    const regionNumber = COUNTRY_REGIONS[countryCode] || '0';
    
    // Combine country code with region number
    return `${countryCode}${regionNumber}`;
}

module.exports = { generateMetricId };
