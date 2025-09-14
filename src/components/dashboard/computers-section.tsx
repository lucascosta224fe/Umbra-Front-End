import { ComputerCard } from "./computer-card";

export function ComputersSection() {
  return (
    <section>
      <h2 className="mb-4 text-[22px] font-bold text-white">Computadores</h2>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {computers.map((pc) => (
          <ComputerCard
            key={pc.id}
            name={pc.name}
            ip={pc.ip}
            mac={pc.mac}
            ipv6={pc.ipv6}
            usagePct={pc.usagePct ?? 0}
          />
        ))}
      </div>
    </section>
  );
}

  const computers = [
    {
      id: "1",
      name: "Computador 1",
      ip: "192.168.10.15",
      mac: "0A-00-27-00-00-10",
      ipv6: "2001:0:2877:7aa:2468:31be:40e6:2b3b",
      usagePct: 35,
    },
    {
      id: "2",
      name: "Computador 2",
      ip: "192.168.10.4",
      mac: "0A-00-27-00-00-10",
      ipv6: "2001:0:2877:7aa:2468:31be:40e6:2b3b",
      usagePct: 28,
    },
    {
      id: "3",
      name: "Computador 3",
      ip: "192.168.10.2",
      mac: "0A-00-27-00-00-10",
      ipv6: "2001:0:2877:7aa:2468:31be:40e6:2b3b",
      usagePct: 12,
    },
    {
      id: "4",
      name: "Computador 4",
      ip: "192.168.10.9",
      mac: "0A-00-27-00-00-10",
      ipv6: "2001:0:2877:7aa:2468:31be:40e6:2b3b",
      usagePct: 48,
    },
    {
      id: "5",
      name: "Computador 5",
      ip: "192.168.10.13",
      mac: "0A-00-27-00-00-10",
      ipv6: "2001:0:2877:7aa:2468:31be:40e6:2b3b",
      usagePct: 7,
    },
  ];