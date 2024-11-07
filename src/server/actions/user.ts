"use server";

import crypto from "crypto";
import { gibson } from "@/gibson";

export async function createUser({ email }: { email: string }) {
  console.log("Creating user", email);
  const { data, error } = await gibson.POST("/v1/-/user", {
    body: {
      date_of_birth: "1990-01-01",
      email,
      email_verified: true,
      first_name: "Test",
      identity_verified: true,
      last_name: "Test",
      password_hash: crypto
        .createHash("md5")
        .update(crypto.randomBytes(16).toString("hex"))
        .digest("hex"),
      phone_verified: true,
      role: 1,
      status: 1,
    },
  });

  if (error) {
    console.error(error.detail?.[0]);
    throw new Error(error.detail?.[0]?.msg ?? "Something went wrong");
  }

  return data;
}

export async function getUser({ uuid }: { uuid: string }) {
  const { data, error } = await gibson.GET("/v1/-/user/{uuid}", {
    params: {
      path: { uuid },
    },
  });

  if (error) {
    console.error(error.detail?.[0]);
    throw new Error(error.detail?.[0]?.msg ?? "Something went wrong");
  }

  return data;
}

export async function getUsers() {
  const { data } = await gibson.GET("/v1/-/user");

  return data;
}
