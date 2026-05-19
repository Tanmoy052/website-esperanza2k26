"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Sedgwick_Ave_Display} from "next/font/google";
const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  rollNumber: z.string().min(8, "Roll number must be at least 8 characters"),
  contactNumber: z
    .string()
    .min(8, "Contact number must be at least 8 characters"),
  year: z.string().min(1, "Please select a year"),
  department: z.string().min(1, "Please select a department"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const ProfileForm = ({
  user,
}: {
  user?: {
    name: string;
    rollNumber: string;
    email: string;
    phoneNumber: string;
    department: string;
    year: string;
  };
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.name?.split(" ")[0] || "",
      lastName: user?.name?.split(" ")[1] || "",
      email: user?.email || "",
      rollNumber: user?.rollNumber || "",
      contactNumber: user?.phoneNumber || "",
      year: user?.year || "",
      department: user?.department || "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter first name"
                    className="bg-gray-800/50 text-sm sm:text-base"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter last name"
                    className="bg-gray-800/50 text-sm sm:text-base"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter email"
                  className="bg-gray-800/50 text-sm sm:text-base"
                  {...field}
                  readOnly
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rollNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>
                Roll Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter roll number"
                  className="bg-gray-800/50 text-sm sm:text-base"
                  {...field}
                  readOnly
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>
                Contact Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter contact number"
                  className="bg-gray-800/50 text-sm sm:text-base"
                  {...field}
                  readOnly
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>Year</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter contact number"
                    className="bg-gray-800/50 text-sm sm:text-base"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>
                  Department
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter contact number"
                    className="bg-gray-800/50 text-sm sm:text-base"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage className="text-xs sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        {/* <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${sedgwick.className} text-sm sm:text-base`}>Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="bg-gray-800/50 text-sm sm:text-base pr-10"
                    {...field}
                  />
                </FormControl>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        /> */}

        {submitSuccess && (
          <div className="bg-green-500/20 text-green-400 p-3 rounded-md text-sm">
            Profile updated successfully!
          </div>
        )}

        {/* <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
          <Button
            variant="outline"
            type="button"
            className={`${sedgwick.className} hover:bg-red-500/20 hover:text-red-500 order-2 sm:order-1`}
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className={`${sedgwick.className} bg-red-500 hover:bg-red-600 order-1 sm:order-2`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div> */}
      </form>
    </Form>
  );
};

export default ProfileForm;
