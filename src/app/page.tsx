import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-cl dark:text-info xl:text-2xl">
              خوش آمدید به ...
            </h3>
            <h1 className="text-3xl font-black gradiant lg:text-3xl xl:text-5xl">
              مسیر صعود به قله های برنامه نوسی
            </h1>
            <p>
              ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای
              وب! پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان
              یادگیری رو شروع کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و
              کاملاً کاربردی کنارت هستیم.
            </p>
            <Image
              src="/images/frameworks.png"
              alt=""
              width={412}
              height={39}
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            width={702}
            height={521}
            alt="xander"
          />
        </div>
      </section>
    </>
  );
}
