import {RootDatum, LeafDatum} from '../treeMap';

interface MergedLeaf extends LeafDatum {
  primaryValue: number | undefined;
  secondaryValue: number | undefined;
}

interface MergedBranch {
  id: string;
  label: string;
  fill?: string;
  children: MergedLeaf[];
}

interface MergedData {
  id: string;
  label: string;
  children: MergedBranch[];
}

export const transformData = (primaryData: RootDatum, secondaryData: RootDatum) => {
  const mergedBranchesData: MergedBranch[] = [];
  primaryData.children.forEach(primaryDatum => {
    const secondaryDatum = secondaryData.children.find(datum => datum.label === primaryDatum.label)
    const leaves: MergedLeaf[] = [];
    (primaryDatum as RootDatum).children.forEach((primaryLeaf: LeafDatum) => {
      let size: number;
      let primaryValue: number | undefined = undefined;
      let secondaryValue: number | undefined = undefined;
      if (secondaryDatum && (secondaryDatum as RootDatum).children) {
        const secondaryLeaf = (secondaryDatum as RootDatum).children.find(leaf => leaf.label === primaryLeaf.label);
        if (secondaryLeaf) {
          secondaryValue = (secondaryLeaf as LeafDatum).size;
        }
      }
      primaryValue = (primaryLeaf as LeafDatum).size;
      size = !secondaryValue || primaryValue > secondaryValue ? primaryValue : secondaryValue;
      leaves.push({...primaryLeaf, primaryValue, secondaryValue, size})
    })
    mergedBranchesData.push({
      ...primaryDatum,
      children: leaves,
    })
  })
  const mergedData: MergedData = {
    id: 'merged-data',
    label: 'Comparison Data',
    children: mergedBranchesData,
  }
  return mergedData;
}