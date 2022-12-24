import axios from "axios";
import useSWR from "swr";

import { Poll } from "../../../types";
import { useLocalStorage } from "..";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePoll = (id: string) => {
	const [pollVote, setPollVote] = useLocalStorage<string | undefined>(
		id,
		undefined,
	);

	const { data: pollData } = useSWR<Poll>(`/api/polls/${id}`, fetcher, {});

	const setVote = (value: string) => {
		try {
			axios({
				data: {
					value,
				},
				method: "POST",
				url: `/api/polls/${id}`,
			});
			setPollVote(value);
		} catch (error) {
			// TODO: handle error via UI
			// eslint-disable-next-line no-console
			console.error(error);
		}
	};

	return [pollData, pollVote, setVote] as const;
};
