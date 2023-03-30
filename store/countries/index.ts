import { defineStore } from "pinia";

// Define Country Model 
export interface Country {
    name: string,
    flag: string,
    frName: string,
    enName: string,
}


// Define Countries Store
export const useCountriesStore = defineStore({
    id: 'countries',
    state: () => ({
        countries: [] as Country[],
        activeCountry: {} as Country,
    }),
    actions: {
        async fetchCountries() {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flag,translations')
                const results = await response.json()

                // Map response to Country model
                const countries = results.map((country: any) => ({
                    name: country.name.common,
                    flag: country.flags.svg,
                    frName: country.translations.fra.common || '',
                }))

                // Update countries state
                this.countries = countries
            } catch (error) {
                console.error(error)
            }
        },

        setActiveCountry(country: Country) {
            this.activeCountry = country
        },

        resetActiveCountry() {
            this.activeCountry = {} as Country
        },
    }
})