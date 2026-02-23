"use client";

import { contactSchema } from "@/lib/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    setIsLoading(true);

    const promise = fetch(
      `https://api.telegram.org/bot${telegramBotId}/sendMessage?`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cashe-control": "no-cache",
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        }),
      },
    )
      .then(() => form.reset())
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: "Sending...",
      success: "Message sent successfully",
      error: "Something went wrong",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none h-32"
                  placeholder="Ask question or just say Hi"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email address"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your name here"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-fit"
          size={"lg"}
          type="submit"
          disabled={isLoading}
        >
          <span>Send</span>
          <Send className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
