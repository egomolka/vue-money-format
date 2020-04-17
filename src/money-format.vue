<template>
  <div class=money_format>
    {{formatMoney(value, locale, currencyCode, 
      subunitsValue,
      subunitsToUnit,
      hideSubunits,
      supplementalPrecision)}}
  </div>
</template>
<script>
  export default {
    props: {
      value: Number,
      locale: {
        type: String,
        default: 'en'
      },
      currencyCode: {
        type: String,
        default: 'USD'
      },
      supplementalPrecision: {
        type: Number,
        default: 0
      },
      subunitsValue: {
        type: Boolean,
        default: false
      },
      subunitsToUnit: {
        type: Number,
        default: 1
      },
      hideSubunits: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      /////////////////////////////////////////////////////////////////////
      // Format money based on integer or floating input
      // ===============================================
      // Possible inputs are:
      // value:                 Numerical input (required)
      // locale:                Language and country information, such as 'en' or 'en-US'
      // currencyCode:          3-character cdde from ISO 4217
      // subunitsValue:         Value is denominated in subunits, such as cents
      // subunitsToUnits:       Overrides the minor unit value from ISO 4217. The "subunitsValue"
      //                        option is redundant if you enter a value for this
      // hideSubunits:          Set this to true if you don't want to display the subunits
      // supplementalPrecision: Allows you to display partial subunits . This is ignored if
      //                        you specify "hideSubunits=true"
      /////////////////////////////////////////////////////////////////////
      formatMoney: function(value, 
                            locale, 
                            currencyCode, 
                            subunitsValue, 
                            subunitsToUnit,
                            hideSubunits, 
                            supplementalPrecision) {
        let ret = 0;
        if (Number.isFinite(value)) {
          try {
            let numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode });
            let options = numFormat.resolvedOptions();
            let fraction_digits = options.minimumFractionDigits;
            if (subunitsToUnit > 1) {
              value = value/subunitsToUnit;
            }
            else if (subunitsValue == true) {
              value = value/10 ** options.minimumFractionDigits;
            }
            if (hideSubunits == true) {
              numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, minimumFractionDigits: 0 , maximumFractionDigits: 0 });
            }
            else if (supplementalPrecision > 0) {
              numFormat = new Intl.NumberFormat(locale, { style: 'currency', 
                currency: currencyCode, 
                minimumFractionDigits: options.minimumFractionDigits + supplementalPrecision , 
                maximumFractionDigits: options.maximumFractionDigits + supplementalPrecision });
            }
            ret = numFormat.format(value);
          }
          catch (err) {
            ret = err.message;
          }
        }
        else {
          ret = '#NaN!';
        }
        return ret;
      }
    }
  }
</script>
