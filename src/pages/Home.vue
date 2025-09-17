<template>
    <main class="homepage">
        <aside class="homepage__aside" aria-label="Typography configuration form">
            <FluidTypographyForm />
        </aside>

        <section class="homepage__content" aria-label="Typography visualization and results">
            <Tabs :tabs="['Graph', 'Table']" role="tabpanel">
                <template #default="{ activeTab }">
                    <template v-if="activeTab === 0">
                        <Stats
                            :min-value="minSize"
                            :max-value="maxSize"
                            :start="graphChangeStart.x"
                            :end="graphChangeEnd.x"
                        />
                        <FluidTypographyChart />
                    </template>
                    <template v-else>
                        <AddValue />
                        <article class="homepage__wrapper">
                            <Tracker />
                            <Legend />
                        </article>
                    </template>
                </template>

                <template #snippet>
                    <CodeSnippet :text="clampValue" />
                </template>
                <template #share>
                    <ShareButton />
                </template>
            </Tabs>
        </section>
    </main>
</template>

<script setup>
    import AddValue from '../components/AddValue.vue'
    import CodeSnippet from '../components/CodeSnippet.vue'
    import FluidTypographyChart from '../components/FluidTypographyChart.vue'
    import FluidTypographyForm from '../components/FluidTypographyForm.vue'
    import Legend from '../components/Legend.vue'
    import ShareButton from '../components/ShareButton.vue'
    import Stats from '../components/Stats.vue'
    import Tabs from '../components/Tabs.vue'
    import Tracker from '../components/Tracker.vue'
    import { clampValue, maxSize, minSize } from '../stores/fluidTypographyStore.js'
    import { graphChangeEnd, graphChangeStart } from '../stores/graphStore.js'
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .homepage {
        grid-template-columns: 250px auto;
        grid-gap: var(--spacing-4);
        padding: 0 var(--spacing-n1);
        margin: 0 auto var(--spacing-2);
        max-width: var(--container-max);
        width: 100%;

        @include media.mq-tablet-min {
            padding: 0 var(--spacing-2);
        }

        @include media.mq-desktopLarge-min {
            display: grid;
        }

        @include media.mq-heightLarge {
            display: revert;
        }
    }

    .homepage__wrapper {
        grid-template-columns: 520px 320px;
        grid-gap: var(--spacing-2);
        align-items: flex-start;

        @include media.mq-desktop-min {
            display: grid;
        }
    }
</style>
