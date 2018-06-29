<!--
 Format cvurrency based on ISO 4217 currency codes:
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
      formatMoney: function(value, locale, currencyCode, subunitsValue, hideSubunits) {
        let ret = 0;
        let numFormat = numFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode });
        if (Number.isFinite(value)) {
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
        else {
          ret = numFormat.format(0);
        }
        return ret;
      }
    }
  }
</script>
