class Solution:
    def numPairsDivisibleBy60(self, time):
        n = len(time)
        mod_map = {}
        for i, t in enumerate(time):
            mod = t % 60
            if mod in mod_map:
                mod_map[mod].append(i)
            else:
                mod_map[mod] = [i]
        print(mod_map)
        count = 0
        for i in range(n - 1):
            start_mod = time[i] % 30
            end_mod = (60 - start_mod) % 60
            print(time[i], start_mod, end_mod)
            if end_mod in mod_map:
                possible_durations = mod_map[end_mod]
                m = len(possible_durations)
                for j in range(m):
                    i1 = possible_durations[j]
                    if i1 > i:
                        count += m - j
                        break

        return count


s = Solution()
# t = [30, 20, 150, 100, 40]
t = [439, 407, 197, 191, 291, 486, 30, 307, 11]
print(s.numPairsDivisibleBy60(t))
