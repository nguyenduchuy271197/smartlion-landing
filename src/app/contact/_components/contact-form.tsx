"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SOLUTIONS } from "@/constants";
import { ArrowRightCircle } from "lucide-react";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  field: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  solution: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "You need to select a contact type.",
  }),
  content: z.string().max(160, {
    message: "Message must not be longer than 30 characters.",
  }),
});

export default function ApplyForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      position: "",
      field: "",
      content: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và Tên</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên công ty</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Position */}
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vị trí</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field */}
          <FormField
            control={form.control}
            name="field"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lĩnh vực</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel>Lĩnh vực</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                  >
                    {SOLUTIONS.map((option) => (
                      <FormItem
                        className="flex items-center gap-2 space-y-0"
                        key={option.id}
                      >
                        <FormControl>
                          <RadioGroupItem value={option.id} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Nội dung yêu cầu</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Viết một cái gì đó..."
                    className="resize-none h-44"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <Button type="submit" size="lg" className="group w-full sm:w-auto">
            Gửi
            <ArrowRightCircle className="group-hover:translate-x-1" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
