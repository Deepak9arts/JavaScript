#include <iostream>
#include <vector>
#include <algorithm> // For std::copy

using namespace std;

// Function to merge two halves and count swaps
int mergeAndCount(vector<int>& arr, int left, int mid, int right, bool ascending) {
    int swaps = 0;
    int n1 = mid - left + 1;
    int n2 = right - mid;

    vector<int> leftArr(n1);
    vector<int> rightArr(n2);

    for (int i = 0; i < n1; ++i)
        leftArr[i] = arr[left + i];
    for (int i = 0; i < n2; ++i)
        rightArr[i] = arr[mid + 1 + i];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (ascending ? leftArr[i] <= rightArr[j] : leftArr[i] >= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
            swaps += (n1 - i);
        }
    }

    while (i < n1)
        arr[k++] = leftArr[i++];
    while (j < n2)
        arr[k++] = rightArr[j++];

    return swaps;
}

// Function to perform Merge Sort and count swaps
int mergeSortAndCount(vector<int>& arr, int left, int right, bool ascending) {
    int swaps = 0;
    if (left < right) {
        int mid = left + (right - left) / 2;
        swaps += mergeSortAndCount(arr, left, mid, ascending);
        swaps += mergeSortAndCount(arr, mid + 1, right, ascending);
        swaps += mergeAndCount(arr, left, mid, right, ascending);
    }
    return swaps;
}

int main() {
    int N;
    cin >> N;
    vector<int> Arr(N);
    for (int i = 0; i < N; ++i) {
        cin >> Arr[i];
    }

    // Calculate swaps for ascending and descending orders
    vector<int> ArrCopy = Arr;
    int swaps_ascending = mergeSortAndCount(ArrCopy, 0, N - 1, true);

    ArrCopy = Arr;
    int swaps_descending = mergeSortAndCount(ArrCopy, 0, N - 1, false);

    // Output the minimum number of swaps
    cout << min(swaps_ascending, swaps_descending) << endl;

    return 0;
}