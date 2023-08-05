import { Html } from "@react-three/drei";

import styles from "./text-notification.module.css";
import { HtmlProps } from "@react-three/drei/web/Html";

export function TextNotification({
  children,
  ...htmlProps
}: { children: string } & HtmlProps) {
  return (
    <Html {...htmlProps}>
      <p className={styles.text}>{children}</p>
    </Html>
  );
}
