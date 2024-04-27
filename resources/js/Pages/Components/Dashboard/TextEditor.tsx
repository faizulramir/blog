import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/Components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Input } from "@/Components/ui/input"
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { SimpleEditor } from './TipTap/SimpleEditor'
const extensions = [
  StarterKit,
]

const content = '<p>Hello World!</p>'

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  permalink: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
})

export default function TextEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      permalink: `fzlxtech.my/blog/${getCurrentDate()}`,
    },
  })

  function getCurrentDate(separator='/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  function addPermalink(event:React.FormEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      const title = event.target.value;
      const permalink = title.toLowerCase().replace(/\s+/g, '-');
      form.setValue('permalink', `fzlxtech.my/blog/${getCurrentDate()}/${permalink}`);
    }
  }

  // return (
    // <EditorProvider extensions={extensions} content={content}>
    //   <FloatingMenu>This is the floating menu</FloatingMenu>
    //   <BubbleMenu>This is the bubble menu</BubbleMenu>
    // </EditorProvider>
    
  // )

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input onInput={addPermalink} placeholder="A title to work for" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="permalink"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2">
                <ExternalLinkIcon className="w-5 h-5 text-muted-foreground" />
                <FormLabel>Permalink</FormLabel>
              </div>
              <FormControl>
                <Input readOnly placeholder="A permalink to work for" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SimpleEditor />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}