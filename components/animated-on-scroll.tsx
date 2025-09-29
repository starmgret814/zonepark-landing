import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedOnScroll({ children, className = "" }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
