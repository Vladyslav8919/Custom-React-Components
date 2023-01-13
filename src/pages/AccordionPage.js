import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dskjl3rjsa32f",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      id: "dsjkrh3irksjdf",
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any project you want",
    },
    {
      id: "dslkhfii3hr32rs",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
