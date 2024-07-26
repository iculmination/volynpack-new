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
import Image from "next/image";

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
    <section id="form" className="container py-16 lg:py-28">
      <h2 className="mx-auto text-center text-4xl lg:text-6xl font-bold text-pink-600 mb-6 lg:mb-10">
        Lorem ipsum dolor sit amet.
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="lg:w-1/2">
          <div className="w-full bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700 text-white py-4 lg:py-6 px-4 lg:px-8 rounded-t-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="contacts"
                  render={({ field }) => (
                    <FormItem className="w-full mb-6">
                      <FormLabel className="sm:ml-2">{"Ім'я"}</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Ваше ім'я..."
                          {...field}
                          type="text"
                          readOnly={sent}
                          className="mt-1 py-4 text-black"
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
                    <FormItem className="w-full mb-6">
                      <FormLabel className="sm:ml-2">Контакти</FormLabel>

                      <FormControl>
                        <Input
                          className="mt-1 py-4 text-black"
                          placeholder="Пошта/телефон/месенджер"
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
                    <FormItem className="w-full mb-1">
                      <FormLabel className="sm:ml-2">
                        Що бажаєте замовити або дізнатись?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="mt-1 text-black"
                          placeholder="Вкажіть деталі..."
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
          <Button
            className="w-full text-pink-600 bg-pink-700 mt-[2px] rounded-t-none text-white"
            type="submit"
          >
            Надіслати
          </Button>
        </div>
        <div className="bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700 rounded-full w-fit h-fit mt-10 lg:mt-0">
          <Image
            width={450}
            height={450}
            alt="bags"
            src="/form-bags.png"
            className="drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FormBlock;
