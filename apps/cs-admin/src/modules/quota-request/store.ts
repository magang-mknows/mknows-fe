import { atom } from "recoil";
import { TQuotaItem } from "./types";

export const QuotaDummyData = atom<TQuotaItem[]>({
  key: "quota-dummy-data",
  default: [
    {
      _id: "647eadf33239637657350bda",
      request_number: "0027",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:54:27.315Z",
      updated_at: "2023-06-06T03:54:27.315Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eadf33239637657350bdb",
      request_number: "0027",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:54:27.315Z",
      updated_at: "2023-06-06T03:54:27.315Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eadf33239637657350bdc",
      request_number: "0027",
      feature: "AI Credit Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:54:27.315Z",
      updated_at: "2023-06-06T03:54:27.315Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eade33239637657350bcc",
      request_number: "0026",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:54:11.252Z",
      updated_at: "2023-06-06T03:54:11.252Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eade33239637657350bcd",
      request_number: "0026",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:54:11.252Z",
      updated_at: "2023-06-06T03:54:11.252Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eadd53239637657350bc0",
      request_number: "0025",
      feature: "AI Character Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:53:57.609Z",
      updated_at: "2023-06-06T03:53:57.609Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eadc63239637657350bb1",
      request_number: "0024",
      feature: "AI Identity Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:53:42.253Z",
      updated_at: "2023-06-06T03:53:42.253Z",
      __v: 0,
      feature_id: "6446421682fac8d119900822",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eadc63239637657350bb2",
      request_number: "0024",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:53:42.253Z",
      updated_at: "2023-06-06T03:53:42.253Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eada13239637657350b95",
      request_number: "0023",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:53:05.156Z",
      updated_at: "2023-06-06T03:53:05.156Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eada13239637657350b97",
      request_number: "0023",
      feature: "AI Identity Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:53:05.156Z",
      updated_at: "2023-06-06T03:53:05.156Z",
      __v: 0,
      feature_id: "6446421682fac8d119900822",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647eada13239637657350b96",
      request_number: "0023",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:53:05.156Z",
      updated_at: "2023-06-06T03:53:05.156Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead913239637657350b8d",
      request_number: "0022",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:52:49.011Z",
      updated_at: "2023-06-06T03:52:49.011Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead913239637657350b8c",
      request_number: "0022",
      feature: "AI Credit Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:52:49.011Z",
      updated_at: "2023-06-06T03:52:49.011Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead7f3239637657350b80",
      request_number: "0021",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-06T03:52:31.261Z",
      updated_at: "2023-06-06T03:52:31.261Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead4f3239637657350b73",
      request_number: "0020",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:51:43.195Z",
      updated_at: "2023-06-06T03:51:43.195Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead4f3239637657350b72",
      request_number: "0020",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:51:43.195Z",
      updated_at: "2023-06-06T03:51:43.195Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead423239637657350b6b",
      request_number: "0019",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:51:30.956Z",
      updated_at: "2023-06-06T03:51:30.956Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead3d3239637657350b64",
      request_number: "0018",
      feature: "AI Credit Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:51:25.326Z",
      updated_at: "2023-06-06T03:51:25.326Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead383239637657350b5d",
      request_number: "0017",
      feature: "AI Credit Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-06T03:51:20.623Z",
      updated_at: "2023-06-06T03:51:20.623Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead273239637657350b51",
      request_number: "0016",
      feature: "AI Credit Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-06T03:51:03.421Z",
      updated_at: "2023-06-06T03:51:03.421Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647ead1d3239637657350b4a",
      request_number: "0015",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-06T03:50:53.554Z",
      updated_at: "2023-06-06T03:50:53.554Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6f2032396376573509b8",
      request_number: "0014",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:26:24.288Z",
      updated_at: "2023-06-05T23:26:24.288Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6f1432396376573509af",
      request_number: "0013",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:26:12.092Z",
      updated_at: "2023-06-05T23:26:12.092Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6f1432396376573509b0",
      request_number: "0013",
      feature: "AI Identity Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:26:12.092Z",
      updated_at: "2023-06-05T23:26:12.092Z",
      __v: 0,
      feature_id: "6446421682fac8d119900822",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6edc32396376573509a7",
      request_number: "0012",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:25:16.298Z",
      updated_at: "2023-06-05T23:25:16.298Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6ecd323963765735099e",
      request_number: "0011",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:25:01.560Z",
      updated_at: "2023-06-05T23:25:01.560Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6ecd323963765735099f",
      request_number: "0011",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b11",
      company: "PT. Bank Rakyat Indonesia (BRI)",
      created_at: "2023-06-05T23:25:01.560Z",
      updated_at: "2023-06-05T23:25:01.560Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e7e3239637657350976",
      request_number: "0009",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:42.099Z",
      updated_at: "2023-06-05T23:23:42.099Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e7e3239637657350977",
      request_number: "0009",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:42.099Z",
      updated_at: "2023-06-05T23:23:42.099Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e74323963765735096a",
      request_number: "0008",
      feature: "AI Character Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T23:23:32.051Z",
      updated_at: "2023-06-05T23:23:32.051Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e663239637657350963",
      request_number: "0007",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T23:23:18.070Z",
      updated_at: "2023-06-05T23:23:18.070Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e5e3239637657350958",
      request_number: "0006",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:10.405Z",
      updated_at: "2023-06-05T23:23:10.405Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e5e323963765735095a",
      request_number: "0006",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:10.405Z",
      updated_at: "2023-06-05T23:23:10.405Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e5e3239637657350959",
      request_number: "0006",
      feature: "AI Credit Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:10.405Z",
      updated_at: "2023-06-05T23:23:10.405Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e56323963765735094a",
      request_number: "0005",
      feature: "AI Character Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T23:23:02.782Z",
      updated_at: "2023-06-05T23:23:02.782Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e56323963765735094b",
      request_number: "0005",
      feature: "AI Identity Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T23:23:02.782Z",
      updated_at: "2023-06-05T23:23:02.782Z",
      __v: 0,
      feature_id: "6446421682fac8d119900822",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e4a3239637657350943",
      request_number: "0004",
      feature: "AI Credit Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T23:22:50.018Z",
      updated_at: "2023-06-05T23:22:50.018Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e3c3239637657350938",
      request_number: "0003",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:22:36.181Z",
      updated_at: "2023-06-05T23:22:36.181Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e3c3239637657350939",
      request_number: "0003",
      feature: "AI Credit Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:22:36.182Z",
      updated_at: "2023-06-05T23:22:36.182Z",
      __v: 0,
      feature_id: "6446421682fac8d119900825",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e3c323963765735093a",
      request_number: "0003",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:22:36.182Z",
      updated_at: "2023-06-05T23:22:36.182Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e2d323963765735092a",
      request_number: "0002",
      feature: "AI Character Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:22:21.094Z",
      updated_at: "2023-06-05T23:22:21.094Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e2d323963765735092b",
      request_number: "0002",
      feature: "AI Capability Scoring",
      quantity: 1000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:22:21.094Z",
      updated_at: "2023-06-05T23:22:21.094Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e6e883239637657350984",
      request_number: "00010",
      feature: "AI Capability Scoring",
      quantity: 5000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b21",
      company: "PT. Bank Negara Indonesia (BNI)",
      created_at: "2023-06-05T23:23:52.381Z",
      updated_at: "2023-06-05T23:23:52.381Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e381b9c8161f4f8bd0507",
      request_number: "0001",
      feature: "AI Character Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T19:31:39.480Z",
      updated_at: "2023-06-05T19:31:39.480Z",
      __v: 0,
      feature_id: "6446421682fac8d119900823",
      payment_status: "MENUNGGU",
    },
    {
      _id: "647e381b9c8161f4f8bd0508",
      request_number: "0001",
      feature: "AI Capability Scoring",
      quantity: 10000,
      status: "PROSES",
      requested_by: "644667cdc80389bc14956b01",
      company: "PT. Menara Indonesia",
      created_at: "2023-06-05T19:31:39.480Z",
      updated_at: "2023-06-05T19:31:39.480Z",
      __v: 0,
      feature_id: "6446421682fac8d119900824",
      payment_status: "MENUNGGU",
    },
  ],
});
