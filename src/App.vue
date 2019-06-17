<template>

    <div :class="$style.speedometer">

        <div :class="$style.speedometerWrapper">

            <svg

            :class="$style.speedometerClock"

            width="400"
            height="400"

            :viewBox="`0 0 ${size} ${size}`"

            >

                <defs>

                    <linearGradient id="gradient" x1="50%" x2="0" y1="0" y2="50%">

                        <stop offset="0%" stop-color="var(--md-cyan-500)" />
                        <stop offset="100%" stop-color="#833ab4" />

                    </linearGradient>

                </defs>

                <path

                :d="
                `M${this.x} ${this.y}
                a ${this.radius} ${this.radius} 0 0 1 0 ${this.diameter}
                a ${this.radius} ${this.radius} 0 0 1 0 -${this.diameter}`
                "

                fill="none"

                stroke="rgba(0, 0, 0, .1)"
                stroke-width="3"
                stroke-dasharray="75, 100"
                stroke-linecap="round"

                />

                <path

                :d="
                `M${this.x} ${this.y}
                a ${this.radius} ${this.radius} 0 0 1 0 ${this.diameter}
                a ${this.radius} ${this.radius} 0 0 1 0 -${this.diameter}`
                "

                fill="none"

                stroke="url(#gradient)"
                stroke-width="2"
                :stroke-dasharray="`${percent}, 100`"
                stroke-linecap="round"

                />

            </svg>

        </div>

        <input type="range" v-model="percent" max="75">

    </div>

</template>

<script>

    export default {

        data : () => ({

            size: 36,
            percent : 0

        }),

        computed : {

            radius(){

                return 100 / (Math.PI * 2)

            },

            diameter(){

                return this.radius * 2

            },

            x(){

                return this.size / 2

            },

            y(){

                return (this.size - this.diameter) / 2

            }

        }

    }

</script>

<style lang="scss" module>

    @import '@/scss/style.scss';
    @import '@/scss/components.scss';

    /* */

    :global {

        body {

            background: $md-blue-grey-900;

        }

    }

    .speedometer {

        position: fixed;

        top: 25%;

        width: 100%;
        height: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        &__wrapper {

            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

        }

        &__clock {

            transform: rotate(225deg);

        }

    }

</style>
