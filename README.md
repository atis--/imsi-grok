
IMSI Analyzer
=============

Break up IMSI into MCC, MNC, MSIN. Determine subscriber country and network.


Example
-------

    const imsi = require('imsi-grok');
    console.log(imsi.grok('247011234567890'));

Output:
    
    { mcc: '247',
      mnc: '01',
      country_iso: 'LV',
      country_name: 'Latvia',
      country_code: '371',
      network_name: 'Latvian Mobile Phone',
      msin: '1234567890' }
