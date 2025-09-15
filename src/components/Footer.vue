<template>
    <footer class="footer">
        <p class="footer__section">
            Inspired by
            <a
                class="footer__link footer__link--primary"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
                target="_blank"
                rel="noopener noreferrer"
            >
                MDN CSS clamp,
            </a>
            <a
                class="footer__link footer__link--primary"
                href="https://css-tricks.com/almanac/functions/c/clamp/"
                target="_blank"
                rel="noopener noreferrer"
            >
                CSS-Tricks clamp guide,
            </a>
            <a
                class="footer__link footer__link--primary"
                href="https://web.dev/articles/min-max-clamp"
                target="_blank"
                rel="noopener noreferrer"
            >
                Web.dev responsive design
            </a>
            and
            <a
                class="footer__link footer__link--primary"
                href="https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/"
                target="_blank"
                rel="noopener noreferrer"
            >
                typography scaling.
            </a>
        </p>
        <p class="footer__section">
            Designed and developed with Vue.js by
            <i class="fa-solid fa-heart footer__icon" />
            <a
                class="footer__link footer__link--secondary"
                href="https://github.com/theaminuli"
                target="_blank"
                rel="noopener noreferrer"
            >
                Aminul Islam
            </a>
        </p>
        <ul class="footer__links">
            <li class="footer__item">
                <a
                    href="https://twitter.com/theaminuli"
                    target="_blank"
                    class="footer__link footer__link--social"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-twitter" />
                </a>
            </li>
            <li class="footer__item">
                <a
                    href="https://www.linkedin.com/in/theaminuli/"
                    target="_blank"
                    class="footer__link footer__link--social"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-linkedin-in" />
                </a>
            </li>
            <li class="footer__item">
                <a
                    href="https://github.com/theaminuli/letter-flux"
                    target="_blank"
                    class="footer__link footer__link--social"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-github-alt" />
                </a>
            </li>
        </ul>
    </footer>
</template>

<script setup>
    // No imports needed for this component
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .footer {
        text-align: center;
        padding: var(--spacing-2) var(--spacing-n1);
        background-color: var(--color-gray-medium-faded);
        border-top: 2px solid var(--color-gray-medium);
        font-weight: var(--font-weight-bold);

        @include media.mq-tablet-min {
            padding: var(--spacing-2);
        }
    }

    .footer__link {
        text-decoration: none;
        font-family: var(--font-family-primary);
    }

    .footer__link:hover,
    .footer__link:active {
        text-decoration: underline;
    }

    .footer__link--primary {
        color: var(--color-primary);
    }

    .footer__link--secondary {
        color: var(--color-secondary);
    }

    .footer__section + .footer__section {
        margin-top: var(--spacing-1);
    }

    .footer__link--social {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: var(--color-gray-light);
        background-color: var(--color-gray-medium-faded);
        border: 2px solid currentColor;
        width: calc(var(--spacing-1) + var(--spacing-n1));
        aspect-ratio: 1;
        font-family: var(--font-family-primary);
        border-radius: var(--spacing-n2);
    }

    .footer__link--social:hover,
    .footer__link--social:active,
    .footer__link--social:focus {
        box-shadow: 0 0 2px 1px var(--color-gray-light);
        text-decoration: none;
    }

    .footer__links {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        margin-top: var(--spacing-1);
    }

    .footer__item + .footer__item {
        margin-left: var(--spacing-n1);
    }
</style>
