<template>
    <header class="header">
        <div class="header__wrapper">
            <div>
                <h1 class="header__title">
                    <router-link class="header__link header__link--title" to="/">
                        LetterFlux
                    </router-link>
                </h1>
                <h2
                    :class="[
                        'header__subtitle',
                        { 'header__subtitle--ready': currentSubtitle && hasChanged }
                    ]"
                >
                    <template v-if="currentSubtitle">
                        {{ currentSubtitle }}
                        <a
                            class="header__link header__link--subtitle"
                            href="https://github.com/theaminuli"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aminul Islam
                        </a>
                    </template>
                    <router-link v-else to="/">&nbsp;</router-link>
                </h2>
            </div>

            <nav>
                <ul class="header__list">
                    <li>
                        <router-link class="header__link header__link--page" to="/about"
                            >About</router-link
                        >
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/theaminuli"
                            target="_blank"
                            class="header__link header__link--social"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/theaminuli/"
                            target="_blank"
                            class="header__link header__link--social"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-linkedin-in" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/theaminuli/letter-flux"
                            target="_blank"
                            class="header__link header__link--social"
                            rel="noopener noreferrer"
                        >
                            <i class="fa-brands fa-github-alt" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { currentSubtitle } from '../../stores/currentSubtitle.js'

    const subtitles = [
        'Created by',
        'Brought to life under the Shadow Proclamation by',
        'Created according to the Shadow Proclamation by',
        'Created according to the Codex Astartes by',
        'In the spirit of the Shadow Proclamation, created by'
    ]

    const hasChanged = ref(false)

    onMounted(() => {
        if (currentSubtitle.value) {
            return
        }

        hasChanged.value = true
        currentSubtitle.value = subtitles[Math.floor(Math.random() * subtitles.length)]
    })
</script>

<style lang="scss" scoped>
    @use '../../assets/styles/media.scss' as media;

    .header {
        margin-bottom: var(--spacing-1);
        background-color: var(--color-gray-medium-faded);
        border-bottom: 2px solid var(--color-gray-medium);
        text-align: center;

        @include media.mq-tablet-min {
            margin-bottom: var(--spacing-2);
            text-align: left;
        }
    }

    .header__wrapper {
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-1) var(--spacing-n1);
        max-width: var(--container-max);
        margin: 0 auto;

        @include media.mq-tablet-min {
            padding: var(--spacing-1) var(--spacing-2);
            display: flex;
        }
    }

    .header__title {
        font-size: var(--font-size-medium);
        font-size: 50px;
        font-weight: 700;
        margin: 0px;
    }

    .header__subtitle {
        font-size: var(--font-size-small);
        color: var(--color-gray-light);
        padding: var(--spacing-n1) 0;

        @include media.mq-tablet-min {
            padding: var(--spacing-n4) 0 0 0;
        }
    }

    .header__link {
        display: block;
        text-decoration: none;
        color: var(--color-gray-light);
        margin: 0;
    }

    .header__link--title {
        color: var(--color-primary);
    }

    .header__link--title:hover {
        color: var(--color-primary-tint);
    }

    .header__list {
        display: flex;
        list-style: none;
        padding: 0;
        justify-content: center;

        @include media.mq-tablet-min {
            justify-content: flex-end;
        }
    }

    .header__list > li + li {
        margin-left: var(--spacing-n1);
    }

    .header__link--subtitle {
        display: inline-block;
        text-decoration: underline;
        color: var(--color-secondary);
    }

    .header__link--subtitle:hover {
        color: var(--color-secondary);
    }

    .header__link--page {
        color: var(--color-secondary);
        background-color: var(--color-secondary-faded);
        border: 2px solid currentColor;
        padding: var(--spacing-n2) var(--spacing-1);
        font-family: var(--font-family-primary);
        border-radius: var(--spacing-n2);
    }

    .header__link--page:hover,
    .header__link--page:active,
    .header__link--page:focus {
        box-shadow: 0 0 2px 1px var(--color-secondary);
    }

    .header__link--social {
        background-color: var(--color-gray-medium-faded);
        border: 2px solid currentColor;
        padding: var(--spacing-n2) var(--spacing-n1);
        font-family: var(--font-family-primary);
        border-radius: var(--spacing-n2);
    }

    .header__link--social:hover,
    .header__link--social:active,
    .header__link--social:focus {
        box-shadow: 0 0 2px 1px var(--color-gray-light);
    }

    .header__subtitle--ready {
        animation: fadeIn 0.5s ease forwards 1;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
