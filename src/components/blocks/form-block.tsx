"use client";

import {
  FormField,
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  contacts: z.string().min(1, {
    message: "Enter your contacts",
  }),
  question: z.string().min(1, {
    message: "Enter your question",
  }),
  details: z.string().min(1, {
    message: "Enter the details",
  }),
});

const FormBlock = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (req: object) => {
    if (sent) return;
    setLoading(true);
    const data = { ...req };
    console.log(data);
    const res = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res && res.ok) {
      setLoading(false);
      setSent(true);
      toast.success("Your question sent");
    } else {
      setLoading(false);
      setSent(false);
      toast.warning("Your question wasn't sent. Please, try again");
    }
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      contacts: "",
      question: "",
      details: "",
    },
  });
  return (
    <section className="container py-20">
      <div className="w-1/2 bg-gradient-to-b from-pink-600 via-pink-600 to-pink-700 text-white p-6 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="contacts"
              render={({ field }) => (
                <FormItem className="w-full mb-3">
                  <FormLabel className="-mb-1">Contacts</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your contacts"
                      {...field}
                      type="text"
                      readOnly={sent}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="w-full mb-3">
                  <FormLabel className="-mb-1">Question</FormLabel>

                  <FormControl>
                    <Input
                      className="mt-1"
                      placeholder="Enter your question"
                      {...field}
                      readOnly={sent}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="w-full mb-3">
                  <FormLabel className="-mb-1">Details</FormLabel>
                  <FormControl>
                    <Textarea
                      className="mt-1"
                      placeholder="Enter your question's details"
                      {...field}
                      readOnly={sent}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default FormBlock;
