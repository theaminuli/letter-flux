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
                    aria-label="Follow Aminul Islam on Twitter (opens in new window)"
                >
                    <i class="fa-brands fa-twitter" aria-hidden="true" />
                    <span class="sr-only">Twitter</span>
                </a>
            </li>
            <li class="footer__item">
                <a
                    href="https://www.linkedin.com/in/theaminuli/"
                    target="_blank"
                    class="footer__link footer__link--social"
                    rel="noopener noreferrer"
                    aria-label="Connect with Aminul Islam on LinkedIn (opens in new window)"
                >
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true" />
                    <span class="sr-only">LinkedIn</span>
                </a>
            </li>
            <li class="footer__item">
                <a
                    href="https://github.com/theaminuli/letter-flux"
                    target="_blank"
                    class="footer__link footer__link--social"
                    rel="noopener noreferrer"
                    aria-label="View LetterFlux source code on GitHub (opens in new window)"
                >
                    <i class="fa-brands fa-github-alt" aria-hidden="true" />
                    <span class="sr-only">GitHub</span>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script setup>
    // No imports needed for this component
</script>

<style lang="scss" scoped>
    @use '../../assets/styles/media.scss' as media;

    .footer {
        text-align: center;
        padding: var(--spacing-2) var(--spacing-n1);
        background-color: var(--color-gray-medium-faded);
        border-top: 2px solid var(--color-gray-medium);
        font-weight: var(--font-weight-regular);

        @include media.mq-tablet-min {
            padding: var(--spacing-2);
        }
    }

    .footer__link {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        transition: all 0.2s ease;
    }

    .footer__link:hover,
    .footer__link:active,
    .footer__link:focus {
        text-decoration-thickness: 2px;
        text-shadow: 0 0 1px currentColor;
    }

    .footer__link--primary {
        color: var(--color-secondary);
    }

    .footer__link--primary:hover,
    .footer__link--primary:focus {
        color: var(--color-primary);
    }

    .footer__link--secondary {
        color: var(--color-secondary);
        background-color: var(--color-secondary-faded);
        padding: 2px 4px;
        border-radius: 3px;
    }

    .footer__link--secondary:hover,
    .footer__link--secondary:focus {
        color: var(--color-primary);
        background-color: var(--color-primary-faded);
        border-color: var(--color-primary-tint);
    }

    // .footer__section + .footer__section {
    //     margin-top: var(--spacing-1);
    // }

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

    /* Enhanced focus styles for accessibility */
    .footer__link:focus-visible {
        outline: 2px solid var(--color-secondary);
        outline-offset: 2px;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .footer__link {
            text-decoration-thickness: 2px;
            font-weight: var(--font-weight-bold);
        }
        
        .footer__link--primary,
        .footer__link--secondary {
            border: 1px solid currentColor;
            padding: 2px 4px;
        }
        
        .footer__link--social {
            border-width: 3px;
        }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .footer__link {
            transition: none;
        }
    }

    /* Screen reader only text */
    .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    /* Improve section text contrast */
    .footer__section {
        color: var(--color-gray-light);
        line-height: 1.6;
    }

    /* Heart icon styling */
    .footer__icon {
        color: var(--color-primary);
        margin: 0 4px;
        animation: heartbeat 2s ease-in-out infinite;
    }

    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    @media (prefers-reduced-motion: reduce) {
        .footer__icon {
            animation: none;
        }
    }
</style>
