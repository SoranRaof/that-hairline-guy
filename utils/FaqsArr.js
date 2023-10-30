const faqsArr = [
  {
    id: 1,
    question: "What is Scalp Micropigmentation (SMP)?",
    answer:
      "SMP is a semi permanent hair loss solution for all types of hair loss in men and women. It’s quick, affordable and there’s no downtime. contrary to other hair loss remedies, SMP works 100% of the time.",
  },
  {
    id: 2,
    question: "How Does SMP Work?",
    answer:
      "We deposit pigment droplets into the scalp just under the top layer of skin using nano needles. This simulates the natural size, shape & shade of real hair follicles. The finished result is a shaved head look. When compared side by side it’s impossible to see the difference between real hair and SMP.",
  },
  {
    id: 3,
    question: "Is scalp micropigmentation a hair tattoo?",
    answer:
      "SMP is a similar concept to a tattoo. We deposit pigment into the skin, but there are important differences. SMP pigment is designed so it can’t change colour. Furthermore, we deposit the pigment at half the depth. By doing it this way the pigment can’t migrate. Lastly, the needles are half the diameter in order to replicate the look of a hair follicle flawlessly.",
  },
  {
    id: 4,
    question: "How long does the treatment take?",
    answer:
      "A full Scalp micropigmentation treatment typically takes three to four appointments of around 2 hours each to complete. We space each appointment seven to fourteen days apart for healing between each treatment session.",
  },
  {
    id: 5,
    question: "How much does SMP cost?",
    answer:
      "Every treatment is tailored to each client. The cost varies from one person to the next so there isn’t a typical price. Please get in touch to find out more.",
  },
  {
    id: 6,
    question:
      "How can we offer such value for money compared to other clinics?",
    answer:
      "We have the most competitive prices in Yorkshire. We want to make the treatment affordable for everyone.",
  },
  {
    id: 7,
    question: "Will the pigment ever change colour?",
    answer:
      "No, this is a specially formulated carbon-based pigment used only for Scalp Micropigmentation. IT CAN NOT CHANGE COLOUR because the pigment does not have any constituent colours in it.",
  },
  {
    id: 8,
    question: "Will my SMP fade over time?",
    answer:
      "Yes, it slowly lightens. Colour boost touch-ups are recommended every 2-5 years, depending on how well you look after it. These take an hour or so and are charged at an hourly rate.",
  },
  {
    id: 9,
    question: "Does it matter what colour my existing hair is?",
    answer:
      "No, we can match any hair colour brown, blonde, ginger, grey it doesn’t matter, we can even match white hair.",
  },
  {
    id: 10,
    question: "What makes our needles different from tattoo needles?",
    answer:
      "We use nano needles which are typically half the diameter of a standard tattoo needle. This is to match the size and shape of a real hair follicle flawlessly.",
  },
  {
    id: 11,
    question: "How long will my scalp take to heal after my treatment?",
    answer:
      "Usually 5-10 days. There is no scabbing with SMP. It can dry your scalp so we wait until the dry skin clears up before your next session.",
  },
  {
    id: 12,
    question:
      "When should I shave my head leading up to my 1st session and how?",
    answer:
      "We recommend a few days of growth at least to allow us to clearly see your hairline.",
  },
  {
    id: 13,
    question: "How is the look achieved?",
    answer:
      "We use a range of different pigment shades and dot sizes over the course of your treatment sessions. This enables some deposits to stand out among others creating a 3d natural look that’s indistinguishable from real hair even up close.",
  },
  {
    id: 14,
    question: "What if my scalp is dry?",
    answer:
      "If the SMP artist notices your scalp is dry they will recommend a moisturising regime for you to follow. Be sure to read our post-care instructions provided to properly care for your scalp after treatment",
  },
  {
    id: 15,
    question: "Will anyone notice I have had the treatment?",
    answer:
      "The look we provide is unbelievably authentic and natural looking. Unless you tell them, no one will know, not even from up close.",
  },
  {
    id: 16,
    question: "What is the discomfort Level?",
    answer:
      "The discomfort level for most clients is 3 – 4 out of 10. Some people even fall asleep during their treatment. The hairline at the front and scars tend to be a little more sensitive but still very manageable.",
  },
  {
    id: 17,
    question:
      "What length should I keep my hair after the treatment is finished?",
    answer:
      "Most clients shave their heads every few days with a 0.5 clipper or a foil shaver. However, it’s a personal preference. There is no right or wrong answer. Simply, whatever length you feel looks best on you when you look in the mirror.",
  },
  {
    id: 18,
    question: "When can I get my head wet or sweat following my session?",
    answer:
      "Five days following your treatment, you can wash your head gently with water. Wait ten days before using any products like shampoo, soap, lotion, etc. You will be given aftercare instructions at your 1st appointment.",
  },
  {
    id: 19,
    question:
      "My job is physical, will sweating interfere with my healing? Can I go to the gym and work out?",
    answer:
      "You should avoid sweating where possible until at least 7 days after your treatment. After 7 full days, you can sweat lightly, and heavily sweating by day 10.",
  },
  {
    id: 20,
    question: "Can Scalp Micropigmentation Camouflage Scars?",
    answer:
      "Yes, we blend the scar with the surrounding hair. Whether it’s a small ding or large scars all across your head. We can camouflage them very effectively with SMP.",
  },
  {
    id: 21,
    question: "How will my scalp look immediately following treatment?",
    answer:
      "There will typically be redness for a day or so after treatment. The pigment may initially appear darker than the healed result, which can take a week or so.",
  },
  {
    id: 22,
    question:
      "Do you have any real-life examples of Scalp Micropigmentation to look at?",
    answer:
      "Our lead artist has had SMP treatment so you will immediately see the finished product during your consultation.",
  },
  {
    id: 23,
    question:
      "How many years down the line will my treatment fade and how much is a touch-up?",
    answer:
      "Most clients get 4-6 years before needing a touch-up. These take around an hour and are charged at an hourly rate. You don’t need a full treatment again, just a small colour boost touch-up. Maintenance costs are less than the cost of haircuts overall.",
  },
  {
    id: 24,
    question: "How will my SMP look when my hair starts greying?",
    answer:
      "Your treatment slowly fades over time. When you start to go grey your SMP procedure will be lightening at approximately the same rate. When you pop in for a touch up we simply match the colour of your hair at that time.",
  },
  {
    id: 25,
    question: "Will tanning and sunbeds affect my SMP?",
    answer:
      "Yes, it’s UV light that fades your SMP quicker. Avoid sunbeds and on hot days use SPF 20+ sun cream or wear a hat. This can be the difference between getting 8 years rather than 5 before a touch-up is needed.",
  },
  {
    id: 26,
    question: "How soon after the consultation can I get started?",
    answer:
      "Consultations often lead to bookings. Appointments are based on the availability at the time and how many treatments we have scheduled so it varies, typically within a week.",
  },
  {
    id: 27,
    question: "How long am I required to wait in between sessions?",
    answer:
      "Appointments are typically spaced 7-10 days apart to allow the pigment time to settle completely.",
  },
];

export default faqsArr;
