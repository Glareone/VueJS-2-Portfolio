<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponentName = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponentName = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponentName = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponentName || 'appBlue'">
                    <h2>Some Default Content from parent</h2>
                    <p slot="greenSlot">Some info from Green Slot</p>
                    <p slot="blueSlot">Some info from Blue Slot</p>
                    <p slot="redSlot">Some info from Red Slot</p>
                    <p>Some info from default Slot</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
          return {
              selectedComponentName: null
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
