import './style.scss'

(async function(d) {

    /* Replace All [data-crypto] Attributes with Values from API */
    fetch('https://crypto.cosmicm.workers.dev/btc/eur')
        .then(response => response.json())
        .then(data => {
            d.querySelectorAll('[data-crypto]').forEach(item => {
                item.innerHTML = data[item.dataset.crypto];
            })
        });

}(document))