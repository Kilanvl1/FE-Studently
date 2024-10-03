import { Avatar } from "app/_components/ui/avatar";
import { Container } from "app/_components/ui/Container";
import { AvatarImage, AvatarFallback } from "app/_components/ui/avatar";
import { GraduationCap, SquareCheck, Globe } from "lucide-react";
import { Property } from "./Property";

export default function AboutUsPage() {
  return (
    <Container className="pt-32 flex flex-col gap-y-4">
      <h3 className="font-bold text-3xl">Run by students, for students</h3>
      <p>
        Studently is a student-run organization that aims to provide students
        with the resources they are entitled to by the government.
      </p>
      <p>
        The concept is simple. We help you receive what you are entitled to and
        you pay only if we succeed.
      </p>
      <h3 className="font-bold text-3xl">Meet the owners</h3>

      <div className="rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-5 px-3 max-w-96">
        <div className="flex items-center gap-x-3 mb-3">
          <Avatar>
            <AvatarImage src="/IMG_0135_2.jpg" alt="Kilan" />
            <AvatarFallback>Kilan</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-xl">Kilan Van Loo</h3>
        </div>
        <Property
          icon={<GraduationCap className="w-6 h-6" />}
          description="Computer Science, Vrije Universiteit"
        />
        <Property
          icon={<SquareCheck className="w-6 h-6" />}
          description="Entitled to €328 / month"
        />
        <Property
          icon={<Globe className="w-6 h-6" />}
          description="French / Dutch"
        />
      </div>
      <div className="rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-5 px-3 max-w-96">
        <div className="flex items-center gap-x-3 mb-3">
          <Avatar>
            <AvatarImage src="/Alex-avatar.jpeg" alt="Alex" />
            <AvatarFallback>Alex</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-xl">Alex Garcia</h3>
        </div>
        <Property
          icon={<GraduationCap className="w-6 h-6" />}
          description="International Business, Vrije Universiteit"
        />
        <Property
          icon={<SquareCheck className="w-6 h-6" />}
          description="Entitled to €328 / month"
        />
        <Property
          icon={<Globe className="w-6 h-6" />}
          description="Spanish / Catalan"
        />
      </div>
    </Container>
  );
}
