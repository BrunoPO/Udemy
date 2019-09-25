export const fruitMixin = {
    //use mixin is good way to have data/computed info all over your app.
    //is recommendend to use local mixin, instead of global mixin, to avoid unnecessary overload on the lifecycle.
    
    data(){
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};
    