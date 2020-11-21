class Solution:
    def intersect(self, nums1, nums2):
        # nums1 should be smaller or equals to

        if len(nums1) > len(nums2):
            return self.intersect(nums2, nums1)

        map_1 = {}
        map_2 = {}

        for n in nums1:
            if n in map_1:
                map_1[n] += 1
            else:
                map_1[n] = 1

        for n in nums2:
            if n in map_2:
                map_2[n] += 1
            else:
                map_2[n] = 1

        res = []
        for n in nums1:
            if n in map_1 and map_1[n] > 0 and n in map_2 and map_2[n] > 0:
                res.append(n)
                map_1[n] -= 1
                map_2[n] -= 1

        return res

