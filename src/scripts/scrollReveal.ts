export interface ScrollRevealOptions {
    /**
     * Horizontal offset in pixels to animate from. Positive values move from right to left.
     */
    x?: number;
    /**
     * Vertical offset in pixels to animate from. Positive values move from bottom to top.
     */
    y?: number;
    /**
     * Duration of the reveal animation in milliseconds.
     */
    duration?: number;
    /**
     * Delay before the animation starts in milliseconds.
     */
    delay?: number;
    /**
     * Intersection observer threshold that triggers the animation.
     */
    threshold?: number;
    /**
     * CSS timing function for the transition.
     */
    easing?: string;
    /**
     * Whether the animation should only run once.
     */
    once?: boolean;
}

const DEFAULTS: Required<
    Pick<
        ScrollRevealOptions,
        "duration" | "delay" | "threshold" | "easing" | "once"
    >
> &
    Pick<ScrollRevealOptions, "x" | "y"> = {
    x: 0,
    y: 24,
    duration: 450,
    delay: 0,
    threshold: 0.15,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    once: true,
};

export function scrollReveal(
    node: HTMLElement,
    options: ScrollRevealOptions = {},
) {
    let config = { ...DEFAULTS, ...options };

    const cleanupStyles = () => {
        node.style.willChange = "";
    };

    const applyInitialState = () => {
        node.style.opacity = "0";
        node.style.transform = `translate3d(${config.x ?? 0}px, ${config.y ?? 0}px, 0)`;
        node.style.transition = `opacity ${config.duration}ms ${config.easing} ${config.delay}ms, transform ${config.duration}ms ${config.easing} ${config.delay}ms`;
        node.style.willChange = "opacity, transform";
    };

    const reveal = () => {
        node.style.opacity = "1";
        node.style.transform = "translate3d(0, 0, 0)";
    };

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    reveal();
                    if (config.once) {
                        observer.unobserve(node);
                        cleanupStyles();
                    }
                } else if (!config.once) {
                    applyInitialState();
                }
            }
        },
        { threshold: config.threshold },
    );

    applyInitialState();
    observer.observe(node);

    return {
        update(newOptions: ScrollRevealOptions = {}) {
            config = { ...DEFAULTS, ...newOptions };
            applyInitialState();
        },
        destroy() {
            observer.unobserve(node);
            observer.disconnect();
            cleanupStyles();
        },
    };
}
