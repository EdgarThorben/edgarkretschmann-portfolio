export interface ButtonProps {
  label: string;
  href: string;
  icon?: string;
}

export interface SectionProps {
  id: string;
  active?: boolean;
}

export interface ContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}
