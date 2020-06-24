import Axios from "axios";

export default {
    data() {
        return {
            values: '',
            commune: null,
            items: [],
            communes: [],
            search: null,
            loading: false,
        };
    },
    created() {
        Axios.get(
            "https://geo.api.gouv.fr/communes?fields=nom,codesPostaux"
        ).then(({
            data
        }) => {
            data.forEach(_data => {
                this.communes.push(_data)
            })
        });
    },
    watch: {
        search(val) {
            if (val && val.length > 1) {
                this.loading = true
                setTimeout(() => {
                    this.items = this.communes.filter(e => {
                        return (e.nom || '').toLowerCase().indexOf((val || '').toLowerCase()) > -1
                    })
                    this.loading = false
                }, 500)
            }
        },
    },
    methods: {
        meteo(event) {
            console.log(event[0])
            
            // Axios.get('https://api.meteo-concept.com/api/forecast/daily?token=540a72c99da2b43ef3732152ab8fce7902abf1b778fd18d625398d0e55a63d67&insee=' + event[0]).then(({
            //     data
            // }) => {

            //     if (data !== false) {
            //         console.log(data)
            //     }

            //     this.commune = data

            //     console.log(" ** TOTO ** ")
            //     console.log(data)
            // })
        }
    }
};
