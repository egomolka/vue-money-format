<!--
 Format currency based on ISO 4217 currency codes:
  https://www.iso.org/iso-4217-currency-codes.html
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
-->
<template>
  <div id=money_format style="text-align:right;">
    {{formatMoney(value, locale, currencyCode, subunitsValue, hideSubunits)}}
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
      subunitsValue: {
        type: Boolean,
        default: false
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
      // value: Numerical input (required)
      // locale: Language and country information, such as 'en' or 'en-US'
      // currencyCode: 
      // subunitsValue: Value is denominated in subunits, such as cents
      // hideSubunits: Do not display the subunits
      /////////////////////////////////////////////////////////////////////
      formatMoney: function(value, locale, currencyCode, subunitsValue, hideSubunits) {
        let ret = 0;
        if (Number.isFinite(value)) {
        try {
            let numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode });
            let options = numFormat.resolvedOptions();
            let fraction_digits = options.minimumFractionDigits;
            if (subunitsValue == true) {
              value = value/10 ** fraction_digits;
            }
            if (hideSubunits == true) {
              value = Math.round(value);
              numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, minimumFractionDigits: 0 , maximumFractionDigits: 0 });
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
