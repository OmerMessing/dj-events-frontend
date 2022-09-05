import { FaExclamationTriangle } from "react-icons/fa";
import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>There seems to be a mistake because there's nothing here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
