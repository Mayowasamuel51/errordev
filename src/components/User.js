import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    return useQuery('users', async () => {
        const useremail = localStorage.getItem('email')
        const response = await fetch(`http://localhost:8000/api/errorfix/${useremail}`);
        return response.json();
    });
};

export default useUsers;