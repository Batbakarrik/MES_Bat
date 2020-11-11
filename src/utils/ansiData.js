const data = [
    {
        id: "47",
        ansi: "21FL",
        iec61850: "SCEFRFLO",
        iec60617: "FLOC",
        designFr: "Protection de distance",
        designEn: "Fault locator"
        },
        {
        id: "55",
        ansi: "21G",
        iec61850: "UZPDIS",
        iec60617: "Z>",
        designFr: "Minimum d impedance",
        designEn: "Three-phase underimpedance protection"
        },
        {
        id: "12",
        ansi: "21YN",
        iec61850: "EFPADM",
        iec60617: "",
        designFr: "Protection de distance",
        designEn: "Admittance-based ground-fault protection"
        },
        {
        id: "25",
        ansi: "24",
        iec61850: "OEPVPH",
        iec60617: "U/f>",
        designFr: "Controle de flux",
        designEn: "Overexcitation protection"
        },
        {
        id: "73",
        ansi: "25",
        iec61850: "SECRSYN",
        iec60617: "SYNC",
        designFr: "",
        designEn: "Synchronism and energizing check"
        },
        {
        id: "66",
        ansi: "25DS",
        iec61850: "DCXSWI",
        iec60617: "",
        designFr: "",
        designEn: "Disconnector control"
        },
        {
        id: "19",
        ansi: "27",
        iec61850: "PHPTUV",
        iec60617: "U<",
        designFr: "Minimum de tension",
        designEn: "Three-phase undervoltage protection"
        },
        {
        id: "51",
        ansi: "27/59THN",
        iec61850: "H3EFPSEF",
        iec60617: "",
        designFr: "",
        designEn: "Third harmonic-based stator ground-fault protection"
        },
        {
        id: "23",
        ansi: "27R",
        iec61850: "MSVPR",
        iec60617: "",
        designFr: "Minimum de tension remanant",
        designEn: "Three-phase remnant undervoltage protection"
        },
        {
        id: "59",
        ansi: "27RT",
        iec61850: "LVRTPTUV",
        iec60617: "",
        designFr: "",
        designEn: "Low-voltage ride-through protection"
        },
        {
        id: "67",
        ansi: "29GS",
        iec61850: "ESXSWI",
        iec60617: "",
        designFr: "",
        designEn: "Grounding switch control"
        },
        {
        id: "69",
        ansi: "29GSI",
        iec61850: "ESSXSWI",
        iec60617: "",
        designFr: "",
        designEn: "Grounding switch indication"
        },
        {
        id: "13",
        ansi: "32N",
        iec61850: "WPWDE",
        iec60617: "",
        designFr: "",
        designEn: "Wattmetric-based ground-fault protection"
        },
        {
        id: "53",
        ansi: "32P/32Q",
        iec61850: "DOPPDPR",
        iec60617: "P>",
        designFr: "Maximum de puissance active ou reactive",
        designEn: "Reverse power/directional overpower protection"
        },
        {
        id: "58",
        ansi: "32Q-27",
        iec61850: "DQPTUV",
        iec60617: "Q>",
        designFr: "",
        designEn: "Directional reactive power undervoltage protection"
        },
        {
        id: "52",
        ansi: "32U",
        iec61850: "DUPPDPR",
        iec60617: "",
        designFr: "Minimum de puissance active",
        designEn: "Underpower protection"
        },
        {
        id: "48",
        ansi: "37",
        iec61850: "PHPTUC",
        iec60617: "I<",
        designFr: "Minimum de courant phase",
        designEn: "Loss of phase"
        },
        {
        id: "29",
        ansi: "37M",
        iec61850: "LOFLPTUC",
        iec60617: "I<",
        designFr: "Minimum de courant phase",
        designEn: "Loss of load supervision"
        },
        {
        id: "54",
        ansi: "40",
        iec61850: "UEXPDIS",
        iec60617: "X<",
        designFr: "Perte d excitation",
        designEn: "Three-phase underexcitation protection"
        },
        {
        id: "16",
        ansi: "46",
        iec61850: "NSPTOC",
        iec60617: "I2>",
        designFr: "Maximum de composante inverse",
        designEn: "Negative-sequence overcurrent protection"
        },
        {
        id: "28",
        ansi: "46M",
        iec61850: "MNSPTOC",
        iec60617: "I2>",
        designFr: "Maximum de composante inverse",
        designEn: "Negative-sequence overcurrent protection for machines"
        },
        {
        id: "17",
        ansi: "46PD",
        iec61850: "PDNSPTOC",
        iec60617: "I2>",
        designFr: "",
        designEn: "Phase discontinuity protection"
        },
        {
        id: "32",
        ansi: "46R",
        iec61850: "PREVPTOC",
        iec60617: "I2>",
        designFr: "Maximum de composante inverse",
        designEn: "Phase reversal protection"
        },
        {
        id: "22",
        ansi: "47",
        iec61850: "NSPTOV",
        iec60617: "U2>",
        designFr: "Maximum de tension inverse",
        designEn: "Negative-sequence overvoltage protection"
        },
        {
        id: "21",
        ansi: "47U",
        iec61850: "PSPTUV",
        iec60617: "U2>",
        designFr: "Minimum de tension inverse",
        designEn: "Positive-sequence undervoltage protection"
        },
        {
        id: "84",
        ansi: "48",
        iec61850: "STTPMSU",
        iec60617: "Is�t,n<",
        designFr: "Demarrage trop long",
        designEn: ""
        },
        {
        id: "26",
        ansi: "49",
        iec61850: "T1PTTR",
        iec60617: "Ith>",
        designFr: "Image thermique",
        designEn: "Three-phase thermal protection"
        },
        {
        id: "33",
        ansi: "49M",
        iec61850: "MPTTR",
        iec60617: "",
        designFr: "Image thermique moteur",
        designEn: "Thermal overload protection for motors"
        },
        {
        id: "27",
        ansi: "49T",
        iec61850: "T2PTTR",
        iec60617: "",
        designFr: "Image thermique",
        designEn: "Three-phase thermal overload protection, two time constant"
        },
        {
        id: "41",
        ansi: "50BF",
        iec61850: "CCBRBRF",
        iec60617: "",
        designFr: "Defaillance disjoncteur",
        designEn: "Circuit breaker failure protection"
        },
        {
        id: "9",
        ansi: "50N",
        iec61850: "EFIPTOC",
        iec60617: "I0>",
        designFr: "Maximum de courant terre temporisee",
        designEn: "Non-directional ground-fault protection, instantaneous stage"
        },
        {
        id: "3",
        ansi: "50P",
        iec61850: "PHIPTOC",
        iec60617: "I>",
        designFr: "Maximum de courant phase instantanee",
        designEn: "Three-phase non-directional overcurrent protection, instantaneous stage"
        },
        {
        id: "30",
        ansi: "51LR",
        iec61850: "JAMPTOC",
        iec60617: "",
        designFr: "Blocage rotor",
        designEn: "Motor load jam protection"
        },
        {
        id: "8",
        ansi: "51N_H",
        iec61850: "EFHPTOC",
        iec60617: "I0>",
        designFr: "Maximum de courant terre temporisee",
        designEn: "Non-directional ground-fault protection, high stage"
        },
        {
        id: "7",
        ansi: "51N_L",
        iec61850: "EFLPTOC",
        iec60617: "I0>",
        designFr: "Maximum de courant terre temporisee",
        designEn: "Non-directional ground-fault protection, low stage"
        },
        {
        id: "15",
        ansi: "51NHA",
        iec61850: "HAEFPTOC",
        iec60617: "",
        designFr: "",
        designEn: "Harmonics-based ground-fault protection"
        },
        {
        id: "2",
        ansi: "51P_H",
        iec61850: "PHHPTOC",
        iec60617: "I>",
        designFr: "Maximum de courant phase temporisee",
        designEn: "Three-phase non-directional overcurrent protection, high stage"
        },
        {
        id: "1",
        ansi: "51P_L",
        iec61850: "PHLPTOC",
        iec60617: "I>",
        designFr: "Maximum de courant phase temporisee",
        designEn: "Three-phase non-directional overcurrent protection, low stage"
        },
        {
        id: "6",
        ansi: "51V",
        iec61850: "PHPVOC",
        iec60617: "",
        designFr: "Maximum de courant phase a retenue de tension instantanee",
        designEn: "Three-phase voltage-dependent overcurrent protection"
        },
        {
        id: "65",
        ansi: "52",
        iec61850: "CBXCBR",
        iec60617: "",
        designFr: "",
        designEn: "Circuit-breaker control"
        },
        {
        id: "74",
        ansi: "52CM",
        iec61850: "SSCBR1",
        iec60617: "",
        designFr: "",
        designEn: "Circuit-breaker condition monitoring"
        },
        {
        id: "68",
        ansi: "52-TOC",
        iec61850: "DCSXSWI",
        iec60617: "",
        designFr: "",
        designEn: "Disconnector position indication"
        },
        {
        id: "20",
        ansi: "59",
        iec61850: "PHPTOV",
        iec60617: "U>",
        designFr: "Maximum de tension",
        designEn: "Three-phase overvoltage protection"
        },
        {
        id: "18",
        ansi: "59N",
        iec61850: "ROVPTOV",
        iec60617: "U0>",
        designFr: "Maximum de composante inverse",
        designEn: "Residual overvoltage protection"
        },
        {
        id: "80",
        ansi: "60",
        iec61850: "SEQSPVC",
        iec60617: "",
        designFr: "",
        designEn: "Fuse failure supervision"
        },
        {
        id: "70",
        ansi: "62EST",
        iec61850: "ESMGAPC",
        iec60617: "",
        designFr: "",
        designEn: "Emergency startup"
        },
        {
        id: "31",
        ansi: "66/51LRS",
        iec61850: "STTPMSU",
        iec60617: "",
        designFr: "Limitation du nombre de demarrage",
        designEn: "Motor start-up supervision"
        },
        {
        id: "5",
        ansi: "67/51P_H",
        iec61850: "DPHHPDOC",
        iec60617: "I> dir",
        designFr: "Maximum de courant phase directionnelle",
        designEn: "Three-phase directional overcurrent protection, high stage"
        },
        {
        id: "4",
        ansi: "67/51P_L",
        iec61850: "DPHLPDOC",
        iec60617: "",
        designFr: "Maximum de courant phase directionnelle",
        designEn: "Three-phase directional overcurrent protection, low stage stage"
        },
        {
        id: "11",
        ansi: "67N_H",
        iec61850: "DEFHPDEF",
        iec60617: "",
        designFr: "Maximum de courant terre directionnelle",
        designEn: "Directional ground-fault protection, high stage"
        },
        {
        id: "10",
        ansi: "67N_L",
        iec61850: "DEFLPDEF",
        iec60617: "",
        designFr: "Maximum de courant terre directionnelle",
        designEn: "Directional ground-fault protection, low stage"
        },
        {
        id: "14",
        ansi: "67NIEF",
        iec61850: "INTRPTEF",
        iec60617: "",
        designFr: "",
        designEn: "Transient/intermittent ground-fault protection"
        },
        {
        id: "57",
        ansi: "67YN",
        iec61850: "MFADPSDE",
        iec60617: "",
        designFr: "",
        designEn: "Multifrequency admittance-based ground-fault protection"
        },
        {
        id: "56",
        ansi: "78",
        iec61850: "OOSRPSB",
        iec60617: "",
        designFr: "",
        designEn: "Out-of-step protection"
        },
        {
        id: "60",
        ansi: "78V",
        iec61850: "VVSPPAM",
        iec60617: "",
        designFr: "Perte de synchronisme",
        designEn: "Voltage vector shift protection"
        },
        {
        id: "71",
        ansi: "79",
        iec61850: "DARREC",
        iec60617: "",
        designFr: "",
        designEn: "Autoreclosing"
        },
        {
        id: "24",
        ansi: "81",
        iec61850: "FRPFRQ",
        iec60617: "f",
        designFr: "Protection frequence",
        designEn: "Frequency protection"
        },
        {
        id: "72",
        ansi: "84T",
        iec61850: "TPOSYLTC",
        iec60617: "",
        designFr: "",
        designEn: "Tap changer position indication"
        },
        {
        id: "44",
        ansi: "86/94",
        iec61850: "TRPPTRC",
        iec60617: "",
        designFr: "",
        designEn: "Master trip"
        },
        {
        id: "36",
        ansi: "87A",
        iec61850: "HIAPDIF",
        iec60617: "Delta I>",
        designFr: "Differentielle phase A",
        designEn: "High-impedance differential protection for phase A"
        },
        {
        id: "37",
        ansi: "87B",
        iec61850: "HIBPDIF",
        iec60617: "Delta I>",
        designFr: "Differentielle phase B",
        designEn: "High-impedance differential protection for phase B"
        },
        {
        id: "38",
        ansi: "87C",
        iec61850: "HICPDIF",
        iec60617: "Delta I>",
        designFr: "Differentielle phase C",
        designEn: "High-impedance differential protection for phase C"
        },
        {
        id: "35",
        ansi: "87G",
        iec61850: "MPDIF",
        iec60617: "Delta I>",
        designFr: "Differentielle moteur",
        designEn: "Motor differential protection"
        },
        {
        id: "49",
        ansi: "87L",
        iec61850: "LNPLDF",
        iec60617: "Delta I>",
        designFr: "Differentielle ligne",
        designEn: "Line differential protection with in-zone power transformer"
        },
        {
        id: "40",
        ansi: "87LOZREF",
        iec61850: "LREFPNDF",
        iec60617: "Delta I>",
        designFr: "Differentielle",
        designEn: "Numerically stabilized low-impedance restricted ground-fault protection"
        },
        {
        id: "39",
        ansi: "87T",
        iec61850: "TR2PTDF",
        iec60617: "Delta I>",
        designFr: "Differentielle transformateur",
        designEn: "Stabilized and instantaneous differential protection for two-winding transformers"
        },
        {
        id: "45",
        ansi: "AFD",
        iec61850: "ARCSARC",
        iec60617: "",
        designFr: "",
        designEn: "Arc protection"
        },
        {
        id: "76",
        ansi: "CCM",
        iec61850: "CCSPVC",
        iec60617: "",
        designFr: "",
        designEn: "Current circuit supervision"
        },
        {
        id: "50",
        ansi: "HIZ",
        iec61850: "PHIZ",
        iec60617: "",
        designFr: "",
        designEn: "High-impedance fault detection"
        },
        {
        id: "42",
        ansi: "INR",
        iec61850: "INRPHAR",
        iec60617: "",
        designFr: "",
        designEn: "Three-phase inrush detector"
        },
        {
        id: "46",
        ansi: "MAP",
        iec61850: "MAPGAPC",
        iec60617: "",
        designFr: "",
        designEn: "Multipurpose protection"
        },
        {
        id: "77",
        ansi: "MCS-A",
        iec61850: "HZCCASPVC",
        iec60617: "",
        designFr: "",
        designEn: "Current transformer supervision for high-impedance protection scheme for phase A"
        },
        {
        id: "78",
        ansi: "MCS-B",
        iec61850: "HZCCBSPVC",
        iec60617: "",
        designFr: "",
        designEn: "Current transformer supervision for high-impedance protection scheme for phase B"
        },
        {
        id: "79",
        ansi: "MCS-C",
        iec61850: "HZCCCSPVC",
        iec60617: "",
        designFr: "",
        designEn: "Current transformer supervision for high-impedance protection scheme for phase C"
        },
        {
        id: "82",
        ansi: "OPTM",
        iec61850: "MDSOPT",
        iec60617: "",
        designFr: "",
        designEn: "Runtime counter for machines and devices"
        },
        {
        id: "81",
        ansi: "PCS",
        iec61850: "PCSITPC",
        iec60617: "",
        designFr: "",
        designEn: "Protection communication supervision"
        },
        {
        id: "61",
        ansi: "PQI",
        iec61850: "CMHAI",
        iec60617: "",
        designFr: "",
        designEn: "Current total demand distortion"
        },
        {
        id: "63",
        ansi: "PQSS",
        iec61850: "PHQVVR",
        iec60617: "",
        designFr: "",
        designEn: "Voltage variation"
        },
        {
        id: "62",
        ansi: "PQVPH",
        iec61850: "VMHAI",
        iec60617: "",
        designFr: "",
        designEn: "Voltage total harmonic distortion"
        },
        {
        id: "64",
        ansi: "PQVUB",
        iec61850: "VSQVUB",
        iec60617: "",
        designFr: "",
        designEn: "Voltage unbalance"
        },
        {
        id: "43",
        ansi: "SOTF",
        iec61850: "CBPSOF",
        iec60617: "",
        designFr: "",
        designEn: "Switch onto fault"
        },
        {
        id: "75",
        ansi: "TCM",
        iec61850: "TCSSCBR",
        iec60617: "",
        designFr: "",
        designEn: "Trip circuit supervision"
        },
        {
        id: "85",
        ansi: "",
        iec61850: "BSTGGIO",
        iec60617: "",
        designFr: "",
        designEn: "Binary signal transfer"
        }
        ]
export default data